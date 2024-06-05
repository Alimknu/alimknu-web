const checkButton = document.getElementById("check-btn");
const textInput = document.getElementById("text-input");
const resultParagraph = document.getElementById("result");

checkButton.addEventListener("click", () => {
  const text = textInput.value;
  if (text === "") {
    alert("Please input a value");
    return;
  }
  const cleanedText = text.toLowerCase().replace(/[^a-z0-9]/g, "");
  const reversedText = cleanedText.split("").reverse().join("");
  if (reversedText === cleanedText) {
    resultParagraph.textContent = `${text} is a palindrome`;
  } 
  else {
    resultParagraph.textContent = `${text} is not a palindrome`;
  }
});
