let content;

window.onload = function () {
  content = document.getElementById("content");
  document.getElementById("btn-decoration").onclick = () =>
    setInterval(increaseFontSize, 500);
  document.getElementById("cb-bling").onchange = changeFontWeight;
};

function showMessage() {
  alert("Hello, world!");
}

function increaseFontSize() {
  let currentFontSize = window
    .getComputedStyle(content)
    .getPropertyValue("font-size");
  content.style.fontSize = parseInt(currentFontSize) + 2 + "pt";
}

function changeFontWeight() {
  if (document.getElementById("cb-bling").checked) {
    content.style.fontWeight = "bold";
    content.style.textDecoration = "underline";
    content.style.color = "green";
  } else {
    content.style.fontWeight = "normal";
    content.style.textDecoration = "none";
    content.style.color = "black";
  }
}
