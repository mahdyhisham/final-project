// scroll to top Button
let scrtop = document.getElementById("scrollto");
let departments = document.querySelectorAll(".dep_name");
function btn() {
  window.onscroll = () => {
    if (window.pageYOffset >= 100) {
      scrtop.style.display = "block";
    } else {
      scrtop.style.display = "none";
    }

    // department section
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

// giude btn shown content

let guide = document.querySelectorAll(".guidebtn");
let a = document.querySelectorAll(".a");
guide.forEach((btn, i) => {
  btn.addEventListener("click", () => {
    departments.forEach((dep, j) => {
      a[j].classList.remove("act_btn");
      dep.classList.remove("show");
    });
    btn.classList.add("act_btn");
    departments[i].classList.add("show");
  });
});

console.log(departments);
console.log(a);

function getStudentResults(e) {
// this is the function that does the following:
// - Reads the form data (sitting number / name / year / department and etc..)  
// - Reads the student document based on his sitting number from firestore database
// - If there are results it will call another function and pass the data to it called showData(data,year)
// - If data is invalid or nothing comes from firestore it will alert an error

  const name = document.querySelector('input#name').value;
  const yearSelector = document.querySelector('select#year');
  const year = +yearSelector.options[yearSelector.selectedIndex].text;
  const sittingNumber = +document.querySelector('input#sittingNumber').value;

  const departmentSelector = document.querySelector('select#department');
  const department = +departmentSelector.options[departmentSelector.selectedIndex].text


  const studentRef = db.collection('students').doc(String(sittingNumber));

  studentRef.get().then(resp => {
    const data = resp.data();
    if (data) {
      showData(data, year);
    } else {
      alert('Could not find your results with the provided ID');
    }

  }).catch(err => {
    alert('Could not find your results with the provided ID');
  })
  document.querySelector('form').reset();
  return false;
}

function showData(data, year) {
// this is the function that does the following:
// - Creates the view for the results 
// - Add text to the header showing the department name
// - Adds the rest of the view (table cells, table data and so on)

  try {
    document.querySelector('h1.hidden-h1').style.display = 'block'
    const results = data.years[year].firstSemseter;
    const resultsList = document.querySelector('.results-list');

    document.querySelector('h1.department-name').textContent = data.department;

    Object.keys(results).forEach(k => {
      const li = document.createElement("li");
      const subjectElm = document.createElement("span");
      subjectElm.textContent = k;
      const scoreElm = document.createElement("span");
      scoreElm.textContent = results[k];
      li.appendChild(subjectElm);
      li.appendChild(document.createTextNode(" : "));
      li.appendChild(scoreElm);
      resultsList.appendChild(li);
    })
  } catch(err) {
    console.log(err);
  }
}

function showError(err) {
}