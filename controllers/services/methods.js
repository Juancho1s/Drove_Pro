class methods {
  /* This method will return the current location */
  static location(req) {
    let pahtCreation = "";
    let pathParts = req.session.userData.location;
    for (let i = 0; i < pathParts.length; i++) {
      pahtCreation += pathParts[i];
    }
    return pahtCreation;
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
          let folderPaht = foldersIn.push({
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

module.exports = methods