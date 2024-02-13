const main = document.querySelector("main");
const root = document.querySelector(":root");
const input = document.getElementById("input");
const resultInput = document.getElementById("result");

const allowedKeys = [
  "(",
  ")",
  "/",
  "*",
  "-",
  "+",
  "9",
  "8",
  "7",
  "6",
  "5",
  "4",
  "3",
  "2",
  "1",
  "0",
  ".",
  "%",
  " ",
];

document.querySelectorAll(".charKey").forEach((charKeyBtn) => {
  charKeyBtn.addEventListener("click", () => {
    const value = charKeyBtn.dataset.value;
    input.value += value;
  });
});

document.getElementById("clear").addEventListener("click", () => {
  input.value = "";
  input.focus;
});

input.addEventListener("keydown", (event) => {
  event.preventDefault();

  if (allowedKeys.includes(event.key)) {
    input.value += event.key;
    return;
  }

  if (event.key === "Backspace") {
    input.value = input.value.slice(0, -1);
  }

  if (event.key === "Enter") {
    calculate();
  }
});

document.getElementById("equal").addEventListener("click", calculate);

function calculate() {
  const result = eval(input.value);
  resultInput.value = result;
}

document.getElementById('copyToClipboard').addEventListener("click", (event) => {
  const btn = event.currentTarget
  if(btn.innerText === 'Copy'){
    btn.innerText = 'Copied!';
    btn.classList.add('success');
    navigator.clipboard.writeText(resultInput.value);

    setTimeout(() => {
      btn.innerText = 'Copy';
      btn.classList.remove('success');
    }, 2500);
  }
})

document.getElementById("themeSwitcher").addEventListener("click", () => {
  if (main.dataset.theme === "dark") {
    root.style.setProperty("--bg-color", "#f1f5f9");
    root.style.setProperty("--border-color", "#aaa");
    root.style.setProperty("--font-color", "#212529");
    root.style.setProperty("--primary-color", "#26834a");
    main.dataset.theme = "light";
  } else {
    root.style.setProperty("--bg-color", "#212529");
    root.style.setProperty("--border-color", "#666");
    root.style.setProperty("--font-color", "#f1f5f9");
    root.style.setProperty("--primary-color", "#4dff91");
    main.dataset.theme = "dark";
  }
});