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
