var fs = require('fs');

// Recursive function to traverse the folder structure and prepare files for upload
function traverseFolder(folderPath, formData) {
    const files = fs.readdirSync('C:\Users\victo\Desktop\Images'); // Get list of files in the folder
    
    files.forEach(file => {
      const fileInput = document.createElement('input');
      fileInput.type = 'file';
      fileInput.name = 'files[]';
      fileInput.files = [file];
      formData.append('files[]', file);
    });
    
    const folders = ... // Get list of subfolders
    
    folders.forEach(subfolder => {
      traverseFolder(subfolder, formData);
    });
  }
  
  // Trigger the upload process
  const formData = new FormData();
  traverseFolder('path/to/your/folder', formData);
  
  // Send the formData to the PHP endpoint
  fetch('upload.php', {
    method: 'POST',
    body: formData
  }).then(response => {
    // Handle the server response
  });

