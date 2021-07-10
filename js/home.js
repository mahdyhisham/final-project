// loading animation
let loadAnim = document.getElementById("loadAnim");
function preloading() {
  window.onload = () => {
    setTimeout(() => {
      loadAnim.style.display = "none";
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }, 3500);
  };
}
preloading();

// loading animation

//????
// containue onscroll functioon

// scroll to top Button
let scrtop = document.getElementById("scrollto");
function btn() {
  window.onscroll = () => {
    if (window.pageYOffset >= 100) {
      scrtop.style.display = "block";
    } else {
      scrtop.style.display = "none";
    }
    var windowScroll = window.scrollY,
      outerHieght = document.querySelector(".events").offsetTop,
      innerHeight = document.querySelector(".events").offsetHeight,
      conten = document.querySelector(".events"),
      pageHieght = window.innerHeight;
    if (windowScroll > outerHieght - pageHieght + 100) {
      conten.classList.add("active");
    } else {
      conten.classList.remove("active");
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

//

//Start landing slider
let landing = document.getElementById("land"),
  slides = ["land-1.jpg", "land-2.jpg", "space.jpg", "coop.jpg"],
  bullets = document.querySelectorAll(".btn");

function change_image(land, slideNo, bulletNo) {
  let i = 0;
  //manula trigger
  bulletNo.forEach((bul, i) => {
    bul.addEventListener("click", () => {
      bulletNo.forEach((bul) => {
        bul.classList.remove("active");
      });
      bul.classList.add("active");
      land.style.backgroundImage = 'url("images/' + slideNo[i] + '")';
    });
  });
  //manula trigger
  setInterval(() => {
    bulletNo.forEach((bul) => {
      bul.classList.remove("active");
    });
    land.style.backgroundImage = 'url("images/' + slideNo[i] + '")';
    bulletNo[i].classList.add("active");
    i++;
    if (i == slideNo.length) {
      i = 0;
    }
  }, 5000);
}
change_image(landing, slides, bullets);
//End landing slider

//

// Dean's message
let message1 = document.getElementById("welcome-message-1"),
  message2 = document.getElementById("welcome-message-2"),
  p1 = `Welcome to Helwan University (HU) College of Science (COS)
  website.`,
  p2 = `Here you will find information about the programs offered in this
  college. If you desire more information, please contact us or
  visit the campus; we will be pleased to show you our world-class
  facilities and introduce you to the college.`;

function typing() {
  let i = 0,
    j = 0;
  let firstP = setInterval(() => {
    message1.textContent += p1.charAt(i);
    i++;
    if (i > p1.length) {
      clearInterval(firstP);
      let secP = setInterval(() => {
        message2.textContent += p2.charAt(j);
        j++;
        if (j > p2.length) {
          clearInterval(secP);
        }
      }, 40);
    }
  }, 60);
}
typing();
// Dean's message

// last news section slider horizontal

// footer list-show-hide

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

//
