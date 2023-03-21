document.addEventListener("DOMContentLoaded", function () {
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

  const form_submit = document.querySelector("#form_recipe");

  form_submit.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log(Email);
    Email.send({
      // SecureToken: "ec89c5cf-ce69-4350-8575-8e31c1cc10d5",
      Host: "smtp.elasticemail.com",
      Username: "dlgydlf12345@naver.com",
      Password: "39064D7217B65FC655E2266F6DB40C821380",
      To: "dlgydlf12345@naver.com",
      From: "dlgydlf123@gmail.com",
      Subject: "Reservation",
      Body: "And this is the body",
    }).then((message) => alert(message));
    console.log(Email);
  });
});
