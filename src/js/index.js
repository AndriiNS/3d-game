import Swiper from "swiper/bundle";

import "swiper/css/bundle";

const swiper = new Swiper(".swiper", {
  loop: true,

  navigation: {
    nextEl: ".swiper-next",
    prevEl: ".swiper-prev"
  }
});
document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll("section");
  let currentIndex = 0;

  const showSection = (index) => {
    sections.forEach((section, i) => {
      section.classList.toggle("active", i === index);
    });
    currentIndex = index;
  };

  showSection(currentIndex);

  document.querySelectorAll(".first__btn-continue").forEach((button) => {
    button.addEventListener("click", () => {
      if (currentIndex < sections.length - 1) {
        showSection(currentIndex + 1);
      }
    });
  });

  document.querySelectorAll(".next").forEach((button) => {
    button.addEventListener("click", () => {
      if (currentIndex < sections.length - 1) {
        showSection(currentIndex + 1);
      }
    });
  });
});

function setFullHeight() {
  document.documentElement.style.setProperty("--vh", `${window.innerHeight * 0.01}px`);
}

window.addEventListener("resize", setFullHeight);
setFullHeight();

document.addEventListener("DOMContentLoaded", () => {
  const soundButton = document.querySelector(".sound");

  soundButton.addEventListener("click", () => {
    soundButton.classList.toggle("muted");
  });
});
