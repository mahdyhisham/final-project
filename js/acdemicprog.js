let scrtop = document.getElementById("scrollto");
function btn() {
  window.onscroll = () => {
    if (window.pageYOffset >= 100) {
      scrtop.style.display = "block";
    } else {
      scrtop.style.display = "none";
    }
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
  menuTogg.addEventListener("click", () => {
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

//want to remove active when click any wher eles
let plus = document.querySelectorAll(".H-S");
let linkList = document.querySelectorAll(".listlinks");

function togglebtn(pagin, list, attr) {
  pagin.forEach((plu, i) => {
    plu.addEventListener("click", (e) => {
      list.forEach((lis) => {
        lis.classList.remove(`${attr}`);
      });
      // can not close it again onclick twice
      list[i].classList.toggle(`${attr}`);
    });
  });
}
togglebtn(plus, linkList, `active`);
//footer list-show-hide
