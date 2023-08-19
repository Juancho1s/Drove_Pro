const folderORM = require("../models/folderORM");
const methods = require("./services/methods");
const { Op } = require("sequelize");
const crypto = require("crypto-js");
const multer = require("multer");
const path = require("path");
const fs = require("fs");


class foldersController {
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
  
      const uploadedFiles = req.files;
      const locationPath = req.params.path;
      let id_user = req.session.userData.id;
  
      methods.processFolder(newFolder, req);
  
      if (req.session.userData.location.length == 1) {
        res.redirect(`/home/${id_user}/folder/:path`);
      } else {
        res.redirect(req.headers.origin);
      }
  
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

  module.exports = foldersController;