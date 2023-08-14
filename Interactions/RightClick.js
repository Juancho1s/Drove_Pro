// script.js
document.addEventListener("DOMContentLoaded", function () {
  const contextMenu = document.getElementById("contextMenu");
  const openContextMenuButton = document.getElementById("openContextMenu");

  document.addEventListener("contextmenu", function (event) {
    event.preventDefault();

    const x = event.clientX;
    const y = event.clientY;

    contextMenu.style.left = `${x}px`;
    contextMenu.style.top = `${y}px`;

    contextMenu.classList.remove("hidden");
  });

  document.addEventListener("click", function (event) {
    contextMenu.classList.add("hidden");
  });

  openContextMenuButton.addEventListener("click", function (event) {
    event.stopPropagation();
    contextMenu.style.left = `${openContextMenuButton.offsetWidth}px`;
    contextMenu.style.top = `${openContextMenuButton.offsetHeight}px`;
    contextMenu.classList.toggle("hidden");
  });
});
