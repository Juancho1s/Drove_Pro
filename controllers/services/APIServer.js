// const fetchs = require("node-fetch");

const methods = require("./methods");

class APIServer {
  static async uploadFileAPI(req, res, file) {
    // Remplace this variable with the actual path of the folder you are.
    let pathIn = methods.location(req);

    let externalServerUrl = "https://gymalwaysinshape.000webhostapp.com/upload.php?path=" + pathIn + "/";


    if (!file) {
      return res.status(400).send('No file uploaded');
    }

    const formData = new FormData();

    console.log(new Blob(file.buffer))

    formData.append('file', new Blob(file.buffer), file.originalname);

    try {
      const response = await fetch(externalServerUrl, {
        method: 'POST',
        body: formData,
      });
    } catch (error) {
      console.error('Error uploading file:', error);
      res.status(500).send('Internal server error');
    }

    // fetch(
    //   ,
    //   {
    //     method: "POST",
    //     body: formData,
    //   }
    // )
    //   .then((response) => response.text())
    //   .then((data) => {
    //     console.log(data);
    //   })
    //   .catch((error) => {
    //     console.error("Error:", error);
    //   });
  }

  static async deleteFolder() {
    // Remplace this with the actual path of the folder you want to delete
    var folderPath = "testing/testing_folder";

    fetch(
      "https://gymalwaysinshape.000webhostapp.com/deleteFolder.php?folderPath=" +
      folderPath,
      {
        method: "POST",
      }
    )
      .then((response) => response.text())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }

  static async createEmptyFolder() {
    // Remplace Path where the folder is going to be.
    var path = "testing/testing_folder";

    // Name of the folder.
    let folderName = "UltimateGoku";

    fetch(
      "https://gymalwaysinshape.000webhostapp.com/createEmptyFolder.php?path=" +
      path +
      "&name=" +
      folderName,
      {
        method: "POST",
      }
    )
      .then((response) => response.text())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }

  static async deleteFile() {
    fetch(
      "https://gymalwaysinshape.000webhostapp.com/delete.php?path=testing/&fileName=y2mate.com - Luigi Dancing to Death by Glamor full_360p&extension=.mp4",
      {
        method: "POST",
      }
    )
      .then((response) => response.text())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }
}

module.exports = APIServer;