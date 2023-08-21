const methods = require("./methods");

class APIServer {
  static async uploadFileAPI(req, res, file) {
    // Remplace this variable with the actual path of the folder you are.
    let pathIn = methods.location(req);


    if (!file) {
      return res.status(400).send('No file uploaded');
    }

    let formData = new FormData();

    formData.append('file', file);
    try {
      fetch('https://gymalwaysinshape.000webhostapp.com/upload.php?path=' + pathIn + '/', {
        method: 'POST',
        body: formData,
        headers: {
          'Content-Type': file.mimetype, // Set the appropriate content type
        },
      })
        .then(response => response.text())
        .then(data => {
          console.log(data);
        })
        .catch(error => {
          console.error('Error:', error);
        });
    } catch (error) {
      console.log(error)
    }
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