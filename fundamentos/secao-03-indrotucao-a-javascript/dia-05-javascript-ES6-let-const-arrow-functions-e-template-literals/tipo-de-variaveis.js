// Altere o tipo das variáveis (var) para let ou const para que respeitem o escopo em que foram declaradas.

// Modifique a variável para que respeite o escopo em que está sendo declarada. Lembre-se: para que a variável respeite o escopo, ela não deve ser acessível fora do escopo em que esteja sendo declarada.

// function imprimeIdade() {
//   for (var idade = 30; idade <= 40; idade += 1) {
//     console.log('Idade dentro do for:', idade)
//   }
//   console.log('Idade fora do for:', idade) // retire essa linha ao implementar o tipo de variável correta.
// }
// imprimeIdade()

function imprimeIdade() {
  for (let idade = 30; idade <= 40; idade += 1) {
    console.log('Idade dentro do for:', idade)
  }
}
imprimeIdade()

// Altere o valor das propriedades do objeto para que respeite as características da variável do tipo const.

// Executando esse código, recebe-se um erro `TypeError: Assignment to constant variable.`
// const pessoa = {
//   nome: 'Henri',
//   idade: 20
// }
// pessoa = {
//   nome: 'Luna',
//   idade: 19
// } // Altere essa estrutura para corrigir o erro.
// console.log('Nome:', pessoa.nome);
// console.log('Idade:', pessoa.idade);

let pessoa = {
  nome: 'Henri',
  idade: 20
}
pessoa = {
  nome: 'Luna',
  idade: 19
}
console.log('Nome:', pessoa.nome);
console.log('Idade:', pessoa.idade);

// Modifique a variável para que não ocorra Erro.

// const favoriteFood = 'Lasanha';
// favoriteFood = 'Hambúrguer';
// console.log(favoriteFood);

let favoriteFood = 'Lasanha';
favoriteFood = 'Hambúrguer';
console.log(favoriteFood);