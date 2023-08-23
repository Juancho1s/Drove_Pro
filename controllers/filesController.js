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

      // const response = await axios.post(`https://gymalwaysinshape.000webhostapp.com/upload.php?path=${location}/`, formData, {
      //   headers: {
      //     ...formData.getHeaders(), // Include the FormData headers
      //   },
      // });
    } catch (error) {
      console.error(error);
      return res.status(500).send('Internal Server Error');
    }


    const directoryPath = path.join(__dirname, "uploads");

    // fs.readdir(directoryPath, (err, files) => {
    //   files.forEach((file) => {
    //     const filePath = `${directoryPath}/${file}`;
  
    //     fs.unlink(filePath, (err) => {
    //       if (err) {
    //         console.error(`Error deleting ${filePath}: ${err}`);
    //       } else {
    //         console.log(`Deleted ${filePath}`);
    //       }
    //     });
    //   });
    // });



    if (req.session.userData.location.length > 1) {
      res.redirect(`http://localhost:3000/home/folder/${methods.pathEncryption(req, originalname)}`);
    } else {
      res.redirect(`http://localhost:3000/home`);
    }
  }

  /* This method will give you the file to download and set it in the download local storage */
  static async downloadFile(req, res) { }

  static async deleteFiles(req, res) {
    let decryptedPath = req.params.path;
  }

  /* This method will move a file to any selected socation of the user's storage */
  static async moveFileTo(req, res) { }
}

module.exports = filesController;
