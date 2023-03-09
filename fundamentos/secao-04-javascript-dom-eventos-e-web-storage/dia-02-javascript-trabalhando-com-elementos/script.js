// Acesse o elemento elementoOndeVoceEsta.

let currentElement = document.querySelector('#elementoOndeVoceEsta');

// Acesse pai a partir de elementoOndeVoceEsta e adicione uma color a ele.

let elementPai = currentElement.parentElement
elementPai.style.color = "red";
console.log(elementPai);

// Acesse o primeiroFilhoDoFilho e adicione um texto a ele. Você se lembra dos vídeos da aula anterior, como fazer isso?

document.getElementById('primeiroFilhoDoFilho').innerText = 'Primeiro filho do filho';

// Acesse o primeiroFilho a partir de pai.

let elementFirstChild = elementPai.firstElementChild;
console.log(elementFirstChild);

// Agora acesse o primeiroFilho a partir de elementoOndeVoceEsta.

elementFirstChild = currentElement.previousElementSibling;
console.log(elementFirstChild);

// Agora acesse o texto Atenção! a partir de elementoOndeVoceEsta.

let text = currentElement.nextSibling;
console.log(text);

// Agora acesse o terceiroFilho a partir de elementoOndeVoceEsta.

let thirdChild = currentElement.nextElementSibling;
console.log(thirdChild);

// Agora acesse o terceiroFilho a partir de pai.

thirdChild = elementPai.lastElementChild.previousElementSibling;
console.log(thirdChild);