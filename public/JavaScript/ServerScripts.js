
function uploadFile() {

    // Remplace this variable with the actual path of the folder you are.
   var pathIn = document.getElementById("location").textContent;


    // Remplace 'exampleID' with the actual id of the FILE INPUT
   var fileInput = document.getElementById('exampleID');


   if (!fileInput.files || !fileInput.files[0]) {
       alert("Please select a file.");
       return;
   }
   var files = fileInput.files;

   

   var formData = new FormData();

   for (const file of files) {
        formData.append('files[]', file);
    }

   fetch('https://gymalwaysinshape.000webhostapp.com/upload.php?path=' + pathIn + '/', {
       method: 'POST',
       body: formData
   })
   .then(response => response.text())
   .then(data => {
       console.log(data);
   })
   .catch(error => {
       console.error('Error:', error);
   });
}

function deleteFolder() {
    // Remplace this with the actual path of the folder you want to delete
    var folderPath = 'testing/testing_folder';

    fetch('https://gymalwaysinshape.000webhostapp.com/deleteFolder.php?folderPath=' + folderPath, {
        method: 'POST'
    })
    .then(response => response.text())
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.error('Error:', error);
    });
 }


function createEmptyFolder(){
    // Remplace Path where the folder is going to be.
    var path = 'testing/testing_folder';

    // Name of the folder.
    let folderName = 'UltimateGoku2';
    
    fetch('https://gymalwaysinshape.000webhostapp.com/createEmptyFolder.php?path=' + path +'/&name=' + folderName, {
        method: 'POST'
    })
    .then(response => response.text())
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.error('Error:', error);
    });
}

function deleteFile(){

    fetch('https://gymalwaysinshape.000webhostapp.com/delete.php?path=testing/&fileName=y2mate.com - Luigi Dancing to Death by Glamor full_360p&extension=.mp4', {
        method: 'POST'
    })
    .then(response => response.text())
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.error('Error:', error);
    });
}