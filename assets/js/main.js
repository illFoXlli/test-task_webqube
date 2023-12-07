// QUERY SELECTOR SNIPPET
const select = (selector, scope = document) => {
  return scope.querySelector(selector);
};
const selectAll = (selector, scope = document) => {
  return scope.querySelectorAll(selector);
};

// REVEALING ON SCROLL
const the_animation = selectAll(".reveal");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
      }
      // else {
      //     entry.target.classList.remove('active')
      // }
    });
  },
  { threshold: 0.3 }
);

for (let i = 0; i < the_animation.length; i++) {
  const elements = the_animation[i];

  observer.observe(elements);
}

// NAVIGATION
const scrollToElem = (elem) => {
  select(elem).scrollIntoView({ behavior: "smooth" });
};

// YEAR
selectAll(".year").forEach((el) => {
  el.innerText = new Date().getFullYear();
});

// MOBILE MENU
let menuUnderlay = select(".nav-underlay");
let menuOpenImg = select(".menu-btn-img");
let menuCloseImg = select(".menu-close-img");
let menuMobile = select(".mob-menu");

const menuOpening = () => {
  menuMobile.style.right = "0";
  menuUnderlay.classList.add("active");
};

const menuClosing = () => {
  menuMobile.style.right = "-100%";
  menuUnderlay.classList.remove("active");
};

menuOpenImg.addEventListener("click", () => {
  menuOpening();
});
menuCloseImg.addEventListener("click", () => {
  menuClosing();
});
menuUnderlay.addEventListener("click", () => {
  menuClosing();
});

document.getElementById("formEl").onsubmit = validateForm;
