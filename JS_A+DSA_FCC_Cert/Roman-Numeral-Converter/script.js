const convertButton = document.getElementById("convert-btn");
const inputNumber = document.getElementById("number");
const romanOutput = document.getElementById("roman");
const output = document.getElementById("output");

const integerToRomanNumeralMap = new Map([
  [1, "I"],
  [4, "IV"],
  [5, "V"],
  [9, "IX"],
  [10, "X"],
  [40, "XL"],
  [50, "L"],
  [90, "XC"],
  [100, "C"],
  [400, "CD"],
  [500, "D"],
  [900, "CM"],
  [1000, "M"],
]);

convertButton.addEventListener("click", () => {
  output.style.display = "block";
  const num = inputNumber.value;
  if (num === "") {
    output.innerHTML = "Please enter a valid number";
    return;
  }
  if (num < 1) {
    output.innerHTML = "Please enter a number greater than or equal to 1";
    return;
  }
  if (num > 3999) {
    output.innerHTML = "Please enter a number less than or equal to 3999";
    return;
  }
  const romanNumeral = convertToRoman(num);
  output.innerHTML = romanNumeral;
});

const convertToRoman = (num) => {
  let roman = "";
  for (let [key, value] of Array.from(
    integerToRomanNumeralMap.entries()
  ).reverse()) {
    while (num >= key) {
      roman += value;
      num -= key;
    }
  }
  return roman;
};
