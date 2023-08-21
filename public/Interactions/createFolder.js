toggleButton2.addEventListener("click", () => {
  const toggleButton2 = document.getElementById("toggleButton2");
  const content3 = document.querySelector(".content3");
  const contenthi = document.getElementById("contenthi");
  const dropdown = document.getElementById("dropdown");
  if (!content3.classList.contains("relative")) {
    content3.classList.add("relative");
    content3.classList.add("flex");
    content3.classList.remove("hidden");
    contenthi.classList.add("absolute");
    dropdown.classList.add("hidden");
  }
});
