document.addEventListener("DOMContentLoaded", function () {
  // zoom img
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

  // send email
  const form_submit = document.querySelector("#form_recipe");
  form_submit.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.querySelector("#name").value;
    const email = document.querySelector("#email").value;
    const phoneNumber = document.querySelector("#phoneNumber").value;
    const date = document.querySelector(".input_date").value;
    const time = document.querySelector(".input_time").value;
    const inquiry = document.querySelector(".input_inquiry").value;

    Email.send({
      SecureToken: "ec89c5cf-ce69-4350-8575-8e31c1cc10d5",
      To: "dlgydlf12345@naver.com",
      From: "dlgydlf12345@naver.com",
      Subject: "Reservation",
      Body: `名前: ${name}<br>
             メール: ${email}<br>
             電話番号: ${phoneNumber}<br>
             日時: ${date}、${time}<br>
             問い合わせ: ${inquiry}`,
    })
      .then((message) => alert(message))
      .catch(console.error);
  });

  // menu bar background color
  const navbar = document.querySelector("#navbar");
  const navbar_height = navbar.getBoundingClientRect().height;
  const className = "navbar--dark";

  document.addEventListener("scroll", () => {
    if (window.scrollY > navbar_height) {
      navbar.classList.add(className);
    } else {
      if (!navbar_menu.classList.contains("open")) {
        navbar.classList.remove(className);
      }
    }
  });

  // date description btn click
  const descriptionBtn = (className, showMsg) => {
    const btn = document.querySelector(className);
    btn.addEventListener("click", () => {
      alert(showMsg);
    });
  };
  descriptionBtn(
    ".date_description",
    "指定して頂いた時間が既に埋まっている場合には、メールで別の時間にご案内させていただきます。"
  );
  descriptionBtn(".phoneNumber_description", "数字以外は入力できません。");

  // Press Menu to move to the menu area
  const navbar_menu = document.querySelector(".navbar_menu");
  navbar_menu.addEventListener("click", (e) => {
    const link = e.target.dataset.link;

    if (link === undefined) {
      return;
    } else {
      navbar_menu.classList.remove("open");
      scrollIntoView(link);
    }
  });

  // Press Contact me Btn to move to ContactMe area
  const contact_btn = document.querySelector(".home_contact");
  contact_btn.addEventListener("click", () => {
    scrollIntoView("#contact");
  });

  const scrollIntoView = (selector) => {
    const scrollTo = document.querySelector(selector);
    scrollTo.scrollIntoView({ behavior: "smooth" });
  };

  //
  const toggleBtn = document.querySelector(".navbar_toggle-btn");
  toggleBtn.addEventListener("click", () => {
    navbar_menu.classList.toggle("open");
    navbar.classList.add(className);
  });
});
