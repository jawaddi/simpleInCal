// get range input

let rangeInput = document.getElementById("rangeInput");
let output = document.querySelector(".output");
rangeInput.addEventListener(
  "change",
  (e) => {
    output.innerHTML = rangeInput.value + "%";
    // console.log(inp.value);
  },
  false
);
function replaceValuesInDOM() {
  // get amount
  let amount = document.querySelector(".amount");

  // get year
  let year = document.querySelector(".year");
  let yearValue = +year.value;

  let date = new Date();
  let yearOfIn = date.getFullYear() + yearValue;
  if (amount.value === "") {
    document.querySelector(".info").innerHTML = "you are missing something!!";
  } else {
    document.querySelector(".info").innerHTML = `
   if you deposit <span>${amount.value}</span>,<br />
          at an Interest rate of <span> ${+rangeInput.value},</span>%<br />
          You will receive an amount of <span>${
            +amount.value * (+rangeInput.value / 100) * yearValue
          }</span>,<br />
          in the year <span>${yearOfIn}</span>
  `;
  }
   amount.value = "";
  year.value = 1;
  rangeInput.value = 0;
  output.innerHTML = 0;
  amount.focus();
}

document.querySelector(".calculBtn").addEventListener("click", () => {
  replaceValuesInDOM();
});
