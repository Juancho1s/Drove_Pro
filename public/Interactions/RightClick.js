document.addEventListener("DOMContentLoaded", function () {
  const contextMenuTrigger = document.querySelectorAll(".fol");
  const customContextMenu = document.getElementById("customContextMenu");

  contextMenuTrigger.forEach(function(i){
    i.addEventListener("contextmenu", function (event) {
      event.preventDefault(); // Previene el menú contextual predeterminado del navegador
      const x = event.clientX;
      const y = event.clientY;
      customContextMenu.style.left = `${x}px`;
      customContextMenu.style.top = `${y}px`;
      customContextMenu.classList.remove("hidden");
    });
  });

  document.addEventListener("click", function (event) {
    customContextMenu.classList.add("hidden");
  });

  customContextMenu.addEventListener("contextmenu", function (event) {
    event.preventDefault();
  });
});




document.addEventListener("DOMContentLoaded", function () {
  const contextMenuTrigger1 = document.querySelectorAll(".fol1");
  const customContextMenu1 = document.getElementById("customContextMenu1");

  contextMenuTrigger1.forEach(function (i) {
    i.addEventListener("contextmenu", function (event) {
      event.preventDefault(); // Previene el menú contextual predeterminado del navegador
      const x = event.clientX;
      const y = event.clientY;
      customContextMenu1.style.left = `${x}px`;
      customContextMenu1.style.top = `${y}px`;
      customContextMenu1.classList.remove("hidden");
    });
  });

  document.addEventListener("click", function (event) {
    customContextMenu1.classList.add("hidden");
  });

  customContextMenu1.addEventListener("contextmenu", function (event) {
    event.preventDefault();
  });
});