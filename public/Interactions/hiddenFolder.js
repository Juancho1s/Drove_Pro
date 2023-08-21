toggleButton1.addEventListener("click", () => {
  const toggleButton1 = document.getElementById("toggleButton1");
  const content2 = document.querySelector(".content2");
  const contenthi = document.getElementById("contenthi");
  const dropdown = document.getElementById("dropdown");
  if (!content2.classList.contains("relative")) {
    content2.classList.add("relative");
    content2.classList.add("flex");
    content2.classList.remove("hidden");
    contenthi.classList.add("absolute");
    dropdown.classList.add("hidden");
  }
});
