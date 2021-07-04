// n focus field

let inputs = document.querySelectorAll("input");
let labels = document.querySelectorAll("label");

inputs.forEach((input, i) => {
  input.addEventListener("focus", () => {
    labels[i].classList.add("focusedlabel");
  });
  input.addEventListener("blur", () => {
    labels[i].classList.remove("focusedlabel");
    if (input.value != "") {
      labels[i].classList.add("focusedlabel");
    }
  });
});
