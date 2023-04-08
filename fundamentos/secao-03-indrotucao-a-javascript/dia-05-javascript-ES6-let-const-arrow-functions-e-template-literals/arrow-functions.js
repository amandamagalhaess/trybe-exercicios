// Modifique a estrutura das funções a seguir para que elas sejam arrow functions.

// Transforme a função numeroAleatorio em uma arrow function.

// function numeroAleatorio() {
//   return Math.random()
// }
// console.log(numeroAleatorio());

const numeroAleatorio = () => Math.random();
console.log(numeroAleatorio());

// Transforme a função hello em uma arrow function.

// function hello(nome) {
//   return `Olá, ${nome}!`
// }
// let nome = 'Ivan';
// console.log(hello(nome));

const hello = (nome) => `Olá, ${nome}!`;
let nome = 'Ivan';
console.log(hello(nome));

// Transforme a função nomeCompleto em uma arrow function.

// function nomeCompleto(name, sobrenome) {
//   return `${name} ${sobrenome}`
// }
// let name = 'Ivan';
// let sobrenome = 'Pires';
// console.log(nomeCompleto(name, sobrenome));

const nomeCompleto = (name, sobrenome) => `${name} ${sobrenome}`;
let name = 'Ivan';
let sobrenome = 'Pires';
console.log(nomeCompleto(name, sobrenome));

