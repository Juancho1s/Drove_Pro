toggleButton.addEventListener("click", () => {

  const toggleButton = document.getElementById("toggleButton");
  const content1 = document.querySelector(".content1");
  const contenthi = document.getElementById("contenthi");
  const dropdown = document.getElementById("dropdown");
  if (!content1.classList.contains("relative")) {
    content1.classList.add("relative");
    dropdown.classList.add("hidden");
    content1.classList.add("flex");
    content1.classList.remove("hidden");
    contenthi.classList.add("absolute");

    
    
  }
});

