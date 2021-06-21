// loading animation
let loadAnim = document.getElementById("loadAnim");
function preloading() {
  window.onload = () => {
    setTimeout(() => {
      loadAnim.style.display = "none";
      window.scrollTo(0, 0);
    }, 3500);
  };
}
preloading();

// loading animation

//

// scroll to top Button
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
    window.scrollTo(0, 0);
  };
}
btn();
// start header toggle

//

// can not hidde menu without toggel buttom
var menuTogg = document.querySelector(".bars"),
  navg = document.querySelector(".nav"),
  list = document.querySelector(".list");

function toggleMenu() {
  menuTogg.addEventListener("click", () => {
    navg.classList.toggle("menu");
    list.classList.toggle("show");
  });
  let pageWidth = window.innerWidth;
  window.onresize = () => {
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
  slides = ["land-1.jpg", "land-2.jpg", "land-3.jpg", "land-4.jpg"],
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

//

// sdsadi
