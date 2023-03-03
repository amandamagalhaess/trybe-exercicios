// 1 - Lidando com arrays

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let sum = 0;

for (let index = 0; index < numbers.length; index += 1) {
    console.log(numbers[index]);
    sum += numbers[index];
}

console.log('Soma = ' + sum);

let avarage = sum/numbers.length;
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