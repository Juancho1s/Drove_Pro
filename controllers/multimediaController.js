const { Op } = require("sequelize");
const fs = require("fs");
const path = require("path");
const folderORM = require("../models/folderORM");
const fileORM = require("../models/fileORM");

class folderController {
  /* This method will get a specific folder which belong to a specific location */
  static async getFolder(req, res) {}

  /* This method will get all the folders of any specific location */
  static async getAllFolders(req, res) {}

  /* This method can update a folder to the database */
  static async uploadFolder(req, res) {}

  /* 
    This method will create a new folder into the database and also
    it will insert the files which are inside this folder
  */
  static async createFolder(req, res) {
    const newFolder = req.body.folder;
    const locationPath = req.params.path;
    let id_user = req.session.userData.id;

    methods.processFolder(newFolderData);

    // let results = await folderORM.create({
    //   id_user: id_user,
    //   name: folderName,
    //   filesIn : ,
    //   foldersIn : ,
    //   folderBeforePath : ,
    //   path : ,
    // });
  }

  /* This method will download a selected folder and put it in the download path */
  static async downloadFolder(req, res) {}

  /* This method will update the folder's name and any other thing which can be updated */
  static async updateFolder(req, res) {}

  /* This method can move a selected folder to any specific ubication in the user's storage */
  static async moveFolderTo(req, res) {}

  /* 
    This method will obtain the fist structure of the folder 
    I refer to the first level inside this folder.
  */
  static async readFolderFiles(req, res) {}

  /* This method will creat a root for every new user */
  static async newUserRoot(req, res, next) {
    let userId = req.session.userData.id;

    const resutls = folderORM.create({
      id_user: userId,
      name: `root${userId}`,
      filesIn: {},
      foldersIn: {},
      folderBeforePath: "/",
      path: `/root${userId}`,
    });

    if (resutls) {
      next();
    } else {
      res.redirect("/login");
    }
  }
}

class fileController {
  /* This method will get a specific file */
  static async getFile(req, res) {}

  /* This method will get all the files of any specific storage location */
  static async getAllFiles(req, res) {}

  /* This method will create a file in any specific location */
  static async createFile(req, res) {}

  /* This method will give you the file to download and set it in the download local storage */
  static async downloadFile(req, res) {}

  /* This method will update the name of any selected file */
  static async udateFile(req, res) {}

  /* This method will move a file to any selected socation of the user's storage */
  static async moveFileTo(req, res) {}
}

class multimediaController {
  /* Get all files and folders in a specific path  */
  static async getAllfolderAndFilesOf(req, res) {
    let location = (path) => {
      req.session.userData.location.each((locations) => {
        path += locations;
      });
      return path;
    };

    // let cryp1 = location;
    // let cryp2 = location + "/movies";
    // let cryp3 = location + "/Quicksort";
    // const encryptionKey = crypto.randomBytes(32);
    // const iv = crypto.randomBytes(16);

    // const cipher1 = crypto.createCipheriv("aes-256-cbc", encryptionKey, iv);
    // const cipher2 = crypto.createCipheriv("aes-256-cbc", encryptionKey, iv);
    // const cipher3 = crypto.createCipheriv("aes-256-cbc", encryptionKey, iv);

    // let encryptedHex1 = cipher1.update(cryp1, "utf-8", "hex");
    // let encryptedHex2 = cipher2.update(cryp2, "utf-8", "hex");
    // let encryptedHex3 = cipher3.update(cryp3, "utf-8", "hex");
    // encryptedHex1 += cipher1.final("hex");
    // encryptedHex2 += cipher2.final("hex");
    // encryptedHex3 += cipher3.final("hex");

    res.render("home", {
      title: "Home",
      stay: true,
      multimedia: {
        Folder1: {
          id_user: req.params.id,
          name: "movies",
          folderBeforePath: encryptedHex1,
          path: encryptedHex2,
        },
        file: {
          name: "Quicksort",
          type: ".pdf",
          creationDate: "02/10/2023",
          size: "1000",
          usersAndPermission: [
            {
              name: "Juancho",
              permission: "read",
            },
            {
              name: "John4",
              permission: "write",
            },
          ],
          path: encryptedHex3,
        },
      },
    });
  }
}

class methods {
  /* This method will return the current location */
  static async location(req) {
    return (location = (path) => {
      req.session.userData.location.each((locations) => {
        path += locations;
      });
      return path;
    });
  }

  /* This method will process all the folder structure then upload it to the database */
  static async processFolder(newFolder, req) {
    try {
      req.session.userData.location.push(`/${newFolder.originalname}`);
      const items = await fs.readdir(newFolder);
      let foldersIn = [];
      let filesIn = [];
      for (const item of items) {
        const itemPath = path.join(newFolder, item);
        const stat = await fs.stat(itemPath);
        let location = await methods.location(req);
        let path = `${location}/${itemPath.originalname}`;

        if (stat.isDirectory()) {
          let folderPaht = 
          foldersIn.push({
            name: itemPath.originalname,
            path: path,
          });
          await processFolder(itemPath); // Recursively process subfolders
          req.session.userData.location.pop();
        } else if (stat.isFile()) {
          filesIn.push({
            name: itemPath.originalname,
            path: path,
          });
        }
      }

    } catch (error) {
      console.error("Error while processing folder:", error);
    }
  }
}

module.exports = folderController;
