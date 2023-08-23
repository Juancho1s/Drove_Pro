const APIServer = require("./services/APIServer");
const methods = require("./services/methods");
const fileORM = require("../models/fileORM");
const crypto = require("crypto-js");
const { Op } = require("sequelize");
const axios = require("axios");
const FormData = require("form-data");
const path = require("path");
const fs = require("fs");

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

  /* This method will create a file in any specific location */
  static async createFile(req, res) { }

  /* This method will upload a selected file from the user stuff to the server */
  static async uploadFile(req, res) {
    let userId = req.session.userData.id;
    let file = req.file;
    let location = methods.location(req);
    if (!file) {
      if (req.session.userData.location.length > 1) {
        return res.redirect(`http://localhost:3000/home/${userId}/folder/${methods.pathEncryption}`);
      } else {
        return res.redirect(`http://localhost:3000/home/${userId}`);
      }
    }
    let originalname = file.originalname;
    let type = path.extname(originalname);
    let size = file.size;
    let date = new Date;
    let pathLocation = `${location}/${originalname}`;
    let name = path.basename(
      originalname,
      type
    );

    let result = await fileORM.create({
      name: name,
      type: type,
      creationDate: date,
      size: size,
      usersAndPermission: {},
      path: pathLocation,
      pathBefore: location,
      user_id: userId,
    });
    if (!result) {
      if (req.session.userData.location.length > 1) {
        return res.redirect(`http://localhost:3000/home/${userId}/folder/${methods.pathEncryption}`);
      } else {
        return res.redirect(`http://localhost:3000/home/${userId}`);
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

      // Make a POST request to the PHP script
      const response = await axios.post(`https://gymalwaysinshape.000webhostapp.com/upload.php?path=${location}/`, formData, {
        headers: {
          ...formData.getHeaders(), // Include the FormData headers
        },
      });
    } catch (error) {
      console.error(error);
      return res.status(500).send('Internal Server Error');
    }


    if (req.session.userData.location.length > 1) {
      res.redirect(`http://localhost:3000/home/${userId}/folder/${methods.pathEncryption}`);
    } else {
      res.redirect(`http://localhost:3000/home/${userId}`);
    }
  }

  /* This method will give you the file to download and set it in the download local storage */
  static async downloadFile(req, res) { }

  /* This method will update the name of any selected file */
  static async udateFile(req, res) { }

  /* This method will move a file to any selected socation of the user's storage */
  static async moveFileTo(req, res) { }
}

module.exports = filesController;
