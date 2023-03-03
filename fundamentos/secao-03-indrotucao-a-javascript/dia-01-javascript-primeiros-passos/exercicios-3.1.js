// 1

let a = 10;
let b = 5;

console.log('Soma = ' + (a + b));
console.log('Subtração = ' + (a - b));
console.log('Multiplicação = ' + (a * b));
console.log('Divisão = ' + (a / b));
console.log('Módulo = ' + (a % b));

//

let num1 = 30;
let num2 = 56;
let num3 = 25;

// 2

if (num1 > num2) {
    console.log('Maior número: ' + num1);
}
else if (num2 > num1) {
    console.log('Maior número: ' + num2);
}
else {
    console.log('Os números tem o mesmo valor');
}

// 3

if (num1 > num2 && num1 > num3) {
    console.log('Maior número: ' + num1);
}
else if (num2 > num1 && num2 > num3) {
    console.log('Maior número: ' + num2);
}
else if (num3 > num1 && num3 > num2) {
    console.log('Maior número: ' + num3);
}
else {
    console.log('Os números tem o mesmo valor');
}

// 4

if (num1 > 0) {
    console.log('positive');
}
else if (num1 < 0) {
    console.log('negative');
}
else {
    console.log('zero');
}

// 5

let angle1 = 45;
let angle2 = 45;
let angle3 = 90;

if (angle1 > 0 && angle2 > 0 && angle3 > 0) {
    if (angle1 + angle2 + angle3 === 180) {
        console.log('true');
    }
    else {
        console.log('false');
    }
}
else {
    console.log('Ângulo inválido!');
}

// 6

let chessPiece = 'Bispo';

switch (chessPiece.toLowerCase()) {
    case 'peão':
        console.log('Peão: sempre uma casa para frente, exceto no primeiro movimento, quando pode mover-se duas casas');
        break;

    case 'torre':
        console.log('Torre: linha reta, tanto na vertical quanto na horizontal, quantas casas quiser');
        break;

    case 'cavalo':
        console.log('Cavalo: movimento em "L", pode saltar sobre outras peças');
        break;

    case 'bispo':
        console.log('Bispo: diagonal, quantas casas quiser');
        break;

    case 'rainha':
        console.log('Rainha: qualquer direção, quantas casas quiser');
        break;

    case 'rei':
        console.log('Rei: qualquer direção, porém apenas uma casa por vez');
        break;

    default:
        console.log('Peça inválida');
        break;
}

// 7

let nota = 40;

if (nota >= 0 && nota <= 100) {
    if (nota >= 90) {
        console.log(nota = 'A');
    }
    else if (nota >= 80 && nota < 90) {
        console.log(nota = 'B');
    }
    else if (nota >= 70 && nota < 80) {
        console.log(nota = 'C');
    }
    else if (nota >= 60 && nota < 70) {
        console.log(nota = 'D');
    }
    else if (nota >= 50 && nota < 60) {
        console.log(nota = 'E');
    }
    else {
        console.log(nota = 'F');
    }
}
else {
    console.log('Insira uma nota entre 0 e 100');
}

// 8

let n1 = 3;
let n2 = 6;
let n3 = 8;

let isEven = false;

if (n1 % 2 === 0 || n2 % 2 === 0 || n3 % 2 === 0) {
    isEven = true;
}

console.log(isEven);

// 9

let isOdd = false;

if (n1 % 2 !== 0 || n2 % 2 !== 0 || n3 % 2 !== 0) {
    isOdd = true;
}

console.log(isOdd);

// 10

let cost = 20;
let value = 30;
const tax = (20/100) * cost;

if (cost >= 0 && value >= 0) {
    let totalCost = cost + tax;
    let profit = (value - totalCost) * 1000;
    console.log('O lucro é de ' + profit + ' reais.');
}
else {
    console.log('Erro: valores não podem ser menores do que 0');
}