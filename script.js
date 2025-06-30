const title = document.querySelector("h1");
const text = title.innerText;
title.innerText = "";

let i = 0;
function type() {
  if (i < text.length) {
    title.innerText += text[i];
    i++;
    setTimeout(type, 60);
  }
}
type();
