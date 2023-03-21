// 1 - Lidando com arrays

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let sum = 0;

for (let index = 0; index < numbers.length; index += 1) {
  console.log(numbers[index]);
  sum += numbers[index];
}

console.log('Soma = ' + sum);

let avarage = sum / numbers.length;
console.log('Média aritética = ' + avarage);

if (avarage > 20) {
  console.log('Valor maior que 20');
}
else {
  console.log('Valor menor ou igual a 20');
}

let biggestNumber = numbers[0];

for (let index = 1; index < numbers.length; index += 1) {
  if (numbers[index] > biggestNumber) {
    biggestNumber = numbers[index];
  }
}

console.log('Maior número: ' + biggestNumber);

let oddNumbers = 0;

for (let index = 0; index < numbers.length; index += 1) {
  if (numbers[index] % 2 !== 0) {
    oddNumbers += 1;
  }
}

if (oddNumbers.length === 0) {
  console.log('Nenhum valor ímpar encontrado')
}
else {
  console.log('Quantidade de valores ímpares: ' + oddNumbers);
}

let smallestNumber = numbers[0];

for (let index = 1; index < numbers.length; index += 1) {
  if (numbers[index] < smallestNumber) {
    smallestNumber = numbers[index];
  }
}

console.log('Menor número: ' + smallestNumber);

let newNumbers = [];

for (let number = 1; number <= 25; number += 1) {
  newNumbers.push(number);
}

console.log(newNumbers);

for (let index = 0; index < newNumbers.length; index += 1) {
  console.log(newNumbers[index] + ' / 2 = ' + (newNumbers[index] / 2));
}


// Lógica de programação e algoritmos

let factorial = 1;

for (let index = 10; index > 0; index -= 1) {
  factorial = factorial * index;
}
console.log('10! = ' + factorial);


let word = 'tryber';
let invertedWord = '';

for (let index = word.length - 1; index >= 0; index -= 1) {
  invertedWord += word[index];
}
console.log(invertedWord);


let array = ['java', 'javascript', 'python', 'html', 'css'];
let biggestWord = array[0];
let smallestWord = array[0];

for (let index = 1; index < array.length; index += 1) {
  if (array[index].length > biggestWord.length) {
    biggestWord = array[index];
  }
}

for (let index = 1; index < array.length; index += 1) {
  if (array[index].length < smallestWord.length) {
    smallestWord = array[index];
  }
}

console.log('Maior palavra: ' + biggestWord);
console.log('Menor palavra: ' + smallestWord);

// Exercicio bônus

let numbers1 = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let newNumbers1 = [];

for (let index = 1; index < numbers1.length; index += 1) {
  for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
    if (numbers1[index] < numbers1[secondIndex]) {
      let position = numbers1[index];
      numbers1[index] = numbers1[secondIndex];
      numbers1[secondIndex] = position;
    }
  }
}

console.log('Ordem crescente: ' + numbers1);

for (let index = 1; index < numbers1.length; index += 1) {
  for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
    if (numbers1[index] > numbers1[secondIndex]) {
      let position = numbers1[index];
      numbers1[index] = numbers1[secondIndex];
      numbers1[secondIndex] = position;
    }
  }
}

console.log('Ordem decrescente: ' + numbers1);

numbers1 = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (let index = 0; index < numbers1.length - 1; index += 1) {
  newNumbers1.push(numbers1[index] * numbers1[index + 1]);
}
newNumbers1.push(numbers1[numbers1.length - 1] * 2);

console.log(newNumbers1);


let value = 5;
let drawLine = '';

for (let index = 0; index < value; index += 1) {
  drawLine += '*';
}

for (let column = 1; column <= value; column += 1) {
  console.log(drawLine);
}

drawLine = '';

for (let index = 0; index < value; index += 1) {
  drawLine += '*'
  console.log(drawLine);
}

value = 5;
drawLine = '';
let position = value - 1;

for (let index = 0; index < value; index += 1) {
  for (let column = 0; column < value; column += 1) {
    if (column >= position) {
      drawLine += '*';
    }
    else {
      drawLine += ' ';
    }
  }
  console.log(drawLine);
  drawLine = '';
  position -= 1;
}

value = 5;
drawLine = '';
let positionLeft = (value - 1) / 2;
let positionRight = (value - 1) / 2;

for (let index = 0; index < value; index += 2) {
  for (let column = 0; column < value; column += 1) {
    if (column >= positionLeft && column <= positionRight) {
      drawLine += '*';
    }
    else {
      drawLine += ' ';
    }
  }
  console.log(drawLine);
  drawLine = '';
  positionLeft -= 1;
  positionRight += 1;
}

value = 7;
drawLine = '';
positionLeft = (value - 1) / 2;
positionRight = (value - 1) / 2;

for (let index = 0; index < value; index += 2) {
  for (let column = 0; column < value; column += 1) {
    if (column == positionLeft || column == positionRight || index == value - 1) {
      drawLine += '*';
    }
    else {
      drawLine += ' ';
    }
  }
  console.log(drawLine);
  drawLine = '';
  positionLeft -= 1;
  positionRight += 1;
}

let num = 7;
let prime = true;

for (index = 2; index < num; index += 1) {
  if (num % index === 0) {
    prime = false;
  }
}

console.log(prime);