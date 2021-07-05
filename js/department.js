// scroll to top Button
let scrtop = document.getElementById("scrollto");
let departments = document.querySelectorAll(".first_dep");
function btn() {
  window.onscroll = () => {
    if (window.pageYOffset >= 100) {
      scrtop.style.display = "block";
    } else {
      scrtop.style.display = "none";
    }

    // department section
    departments.forEach((dep) => {
      if (window.scrollY > dep.offsetTop - window.innerHeight + 300) {
        dep.classList.add("show");
      } else {
        dep.classList.remove("show");
      }
    });
    // department section
  };
  scrtop.onclick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
}
btn();
// start header toggle

//

// can not hidde menu without toggel button
var menuTogg = document.querySelector(".bars"),
  navg = document.querySelector(".nav"),
  list = document.querySelector(".list");

function toggleMenu() {
  menuTogg.addEventListener("click", (e) => {
    navg.classList.toggle("menu");
    list.classList.toggle("show");
  });
  window.onresize = () => {
    let pageWidth = window.innerWidth;
    if (pageWidth > 767) {
      navg.classList.remove("menu");
      list.classList.remove("show");
    }
  };
}
toggleMenu();
// End header toggle

// footer list-show-hide

//want to remove active when click any wher eles
let plus = document.querySelectorAll(".H-S");
let linkList = document.querySelectorAll(".listlinks");

plus.forEach((plu, i) => {
  plu.addEventListener("click", () => {
    linkList[i].classList.toggle("active");
  });
});

//footer list-show-hide
