const zooms = document.querySelectorAll(".service_photo");
const zoom_back = document.querySelector(".zoom_back");
const zoom_img = document.querySelector(".zoom_img");

zooms.forEach((v) => {
  v.addEventListener("click", function (e) {
    zoom_back.style.display = "flex";

    zoom_img.setAttribute("src", e.target.getAttribute("src"));
  });
});

zoom_back.addEventListener("click", function () {
  zoom_back.style.display = "none";
});
