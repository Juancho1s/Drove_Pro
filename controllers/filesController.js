const APIServer = require("./services/APIServer");
const methods = require("./services/methods");
const fileORM = require("../models/fileORM");
const crypto = require("crypto-js");
const { Op } = require("sequelize");
const axios = require("axios");
const FormData = require("form-data");
const path = require("path");
const fs = require("fs");
const foldersController = require("./foldersController");
const { json } = require("body-parser");

class filesController {
    /* This method will get all the files of any specific storage location */
    static async getAllFiles(req, res) {
        let userId = req.session.userData.id;
        let pathFileter = `${methods.location(req)}%`
        let results = await fileORM.findAll({
            where: {
                path: {
                    [Op.like]: pathFileter,
                },
                user_id: userId, // if user is logged in then only show his files else show public files
            }
        });
        return results;
    }

    /* This method will upload a selected file from the user stuff to the server */
    static async uploadFile(req, res) {
        let userId = req.session.userData.id;
        let file = req.file;
        let location = methods.location(req);
        let originalname = req.file.originalname;
        if (!file) {
            if (req.session.userData.location.length > 1) {
                return res.redirect(`http://localhost:3000/home/folder/${methods.pathEncryption(req, originalname)}`);
            } else {
                return res.redirect(`http://localhost:3000/home`);
            }
        }

        let result = await fileORM.create({
            name: path.basename(
                originalname,
                path.extname(originalname),
            ),
            type: path.extname(originalname),
            creationDate: new Date,
            size: file.size,
            usersAndPermission: {},
            path: `${location}/${originalname}`,
            pathBefore: location,
            user_id: userId,
        });

        let update = await foldersController.updateFilesjsonField(req, originalname);

        if (!result) {
            if (req.session.userData.location.length > 1) {
                return res.redirect(`http://localhost:3000/home/folder/${methods.pathEncryption(req, originalname)}`);
            } else {
                return res.redirect(`http://localhost:3000/home/`);
            }
        }

        try {
            const files = fs.readdirSync('./uploads/'); // Read files from the 'uploads/' directory

            const formData = new FormData();

            // Add each file to the FormData object
            for (const fileName of files) {
                const fileStream = fs.createReadStream(`./uploads/${fileName}`);
                formData.append('files[]', fileStream, { filename: fileName });
            }

            const response = await axios.post(`https://gymalwaysinshape.000webhostapp.com/upload.php?path=${location}/`, formData, {
              headers: {
                ...formData.getHeaders(), // Include the FormData headers
              },
            });
        } catch (error) {
            console.error(error);
        }


        const filePath = `./uploads/${originalname}`;

        // Check if the file exists
        fs.access(filePath, fs.constants.F_OK, (err) => {
            if (err) {
                console.log('File not found.');
                return;
            }

            // Delete the file
            fs.unlink(filePath, (err) => {
                if (err) {
                    console.log('Error deleting the file.');
                    return;
                }

                console.log('File deleted successfully.');
            });
        });



        if (req.session.userData.location.length > 1) {
            res.redirect(`http://localhost:3000/home/folder/${methods.pathEncryption(req, originalname)}`);
        } else {
            res.redirect(`http://localhost:3000/home`);
        }
    }

    /* This method will give you the file to download and set it in the download local storage */
    static async downloadFile(req, res) { }

    static async deleteFiles(req, res) {
        let encryptedLocation = req.params.path;


    }

    /* This method will move a file to any selected socation of the user's storage */
    static async moveFileTo(req, res) { }
}

module.exports = filesController;