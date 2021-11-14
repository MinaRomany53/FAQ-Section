"use strict";
const faqELs = document.querySelectorAll(".faq");
const collabseBtns = document.querySelectorAll(".btn-collapse");

collabseBtns.forEach((btn, i) => {
  btn.addEventListener("click", function () {
    faqELs[i].classList.toggle("active");
  });
});
