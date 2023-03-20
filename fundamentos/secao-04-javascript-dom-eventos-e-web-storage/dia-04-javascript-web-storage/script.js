const body = document.getElementsByTagName('body')[0];
const backgroundColor = document.getElementById('background-color').children;
const fontColor = document.getElementById('font-color').children;
const fontSize = document.getElementById('font-size').children;
const lineHeight = document.getElementById('line-height').children;
const fontFamily = document.getElementById('font-family').children;


const changeBackgroundColor = (event) => {
  localStorage.setItem('background-color', event.target.innerHTML);
  body.style.backgroundColor = event.target.innerHTML;
}
body.style.backgroundColor = localStorage.getItem('background-color');

for (let index = 1; index < backgroundColor.length; index += 1) {
  backgroundColor[index].addEventListener('click', changeBackgroundColor);
}

const changeFontColor = (event) => {
  localStorage.setItem('font-color', event.target.innerHTML);
  body.style.color = event.target.innerHTML;
}
body.style.color = localStorage.getItem('font-color');

for (let index = 1; index < fontColor.length; index += 1) {
  fontColor[index].addEventListener('click', changeFontColor);
}

const changeFontSize = (event) => {
  localStorage.setItem('font-size', event.target.innerHTML);
  body.style.fontSize = event.target.innerHTML;
}
body.style.fontSize = localStorage.getItem('font-size');

for (let index = 1; index < fontSize.length; index += 1) {
  fontSize[index].addEventListener('click', changeFontSize);
}

const changeLineHeight = (event) => {
  localStorage.setItem('line-height', event.target.innerHTML);
  body.style.lineHeight = event.target.innerHTML;
}
body.style.lineHeight = localStorage.getItem('line-height');

for (let index = 1; index < lineHeight.length; index += 1) {
  lineHeight[index].addEventListener('click', changeLineHeight);
}

const changeFontFamily = (event) => {
  localStorage.setItem('font-family', event.target.innerHTML);
  body.style.fontFamily = event.target.innerHTML;
}
body.style.fontFamily = localStorage.getItem('font-family');

for (let index = 1; index < fontFamily.length; index += 1) {
  fontFamily[index].addEventListener('click', changeFontFamily);
}