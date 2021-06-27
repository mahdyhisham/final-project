// n focus field

let inputs = document.querySelectorAll("input");

inputs.forEach((input) => {
  let atr = input.getAttribute("placeholder");
  input.addEventListener("focus", () => {
    input.setAttribute("placeholder", "");
  });
  input.addEventListener("blur", () => {
    input.setAttribute("placeholder", atr);
  });
  console.log(atr);
});
