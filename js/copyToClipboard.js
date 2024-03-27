export function copyToClipboard(event) {
  const btn = event.currentTarget;
  const resultInput = document.getElementById("result");

  if (btn.innerText === "Copy") {
    btn.innerText = "Copied!";
    btn.classList.add("success");
    navigator.clipboard.writeText(resultInput.value);

    setTimeout(() => {
      btn.innerText = "Copy";
      btn.classList.remove("success");
    }, 2500);
  }
}
