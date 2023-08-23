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

const toggleButton45 = document.getElementById("toggleButton45");
toggleButton45.addEventListener("click", () => {
  const content4 = document.querySelector(".content4");
  const contenthi = document.getElementById("contenthi");
  if (!content4.classList.contains("relative")) {
    content4.classList.add("relative");
    content4.classList.add("flex");
    content4.classList.remove("hidden");
    contenthi.classList.add("absolute");
   
  }
});


const toggleButton4 = document.getElementById("toggleButton4");
toggleButton4.addEventListener("click", () => {
  const content5 = document.querySelector(".content5");
  const contenthi = document.getElementById("contenthi");

  if (!content5.classList.contains("relative")) {
    content5.classList.add("relative");
    content5.classList.add("flex");
    content5.classList.remove("hidden");
    contenthi.classList.add("absolute");
   
  }
});
