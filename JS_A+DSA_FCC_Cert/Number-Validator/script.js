const input = document.getElementById("user-input");
const checkButton = document.getElementById("check-btn");
const clearButton = document.getElementById("clear-btn");
const results = document.getElementById("results-div");

const canadaOrUSNumberRegex = /^(\+1|1)?\s?(\(\d{3}\)|\d{3})[\s.-]?\d{3}[\s.-]?\d{4}$/;

const validNumberList = [canadaOrUSNumberRegex];

const isValidNumber = (num) => validNumberList.some((regex) => regex.test(num));

checkButton.addEventListener("click", () => {
  if (input.value === "") {
    alert("Please provide a phone number");
    return;
  }
  if (isValidNumber(input.value)) {
    results.textContent = `Valid US number: ${input.value}`;
  } else {
    results.textContent = `Invalid US number: ${input.value}`;
  }
});

clearButton.addEventListener("click", () => {
  input.value = "";
  results.textContent = "";
});
