const navBar = document.querySelector("#nav-bar");
const hamberger = document.querySelector("#menu");
const navLinks = document.querySelectorAll(".nav-link");

hamberger.addEventListener("click", () => {
  navBar.classList.toggle("left-[0]");
  hamberger.classList.toggle("ri-close-large-line");
  if (hamberger.classList.contains("white")) {
    hamberger.classList.remove("white");
  } else {
    hamberger.classList.add("white");
  }
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navBar.classList.toggle("left-[0]");
    hamberger.classList.toggle("ri-close-large-line");
    if (hamberger.classList.contains("white")) {
      hamberger.classList.remove("white");
    } else {
      hamberger.classList.add("white");
    }
  });
});

const sr = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 2500,
  delay: 200,
  reset: true,
});

sr.reveal(".home__data, .footer_data");
sr.reveal(".home__img", { delay: 500, scale: 4 });
sr.reveal(".why__data");
sr.reveal(".why_left_data, .about_left_data", {
  origin: "left",
  distance: "400px",
});
sr.reveal(".why_right_data, .about_right_data", {
  origin: "right",
  distance: "400px",
});

sr.reveal(" .footer",{origin: "bottom"});

