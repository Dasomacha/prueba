const display = document.querySelector("#display");
const buttons = document.querySelectorAll("button");

buttons.forEach((num) => {
  num.onclick = () => {
    if (num.id == "clear") {
      display.innerText = "";
    } else if (num.id == "backspace") {
      let string = display.innerText.toString();
      display.innerText = string.substr(0, string.length - 1);
    } else if (display.innerText != "" && num.id == "equal") {
      display.innerText = eval(display.innerText);
    } else if (display.innerText == "" && num.id == "equal") {
      display.innerText = "Vacío";
      setTimeout(() => (display.innerText = ""), 2000);
    } else {
      display.innerText += num.id;
    }
  };
});

const themeToggleBtn = document.querySelector(".theme-toggler");
const calculator = document.querySelector(".calculator");
const toggleIcon = document.querySelector(".toggler-icon");
let isDark = true;
themeToggleBtn.onclick = () => {
  calculator.classList.toggle("dark");
  themeToggleBtn.classList.toggle("active");
  isDark = !isDark;
};
