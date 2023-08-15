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
