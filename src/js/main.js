var trigger = document.querySelector(".trigger");
var detail = document.querySelector(".button-wine-detail");
var detailHover = document.querySelector(".button-wine-detail-hover");

trigger.addEventListener("click", (e) => {
  e.preventDefault();
  detail.classList.toggle("is-visible");
  detailHover.classList.toggle("is-visible");
});
