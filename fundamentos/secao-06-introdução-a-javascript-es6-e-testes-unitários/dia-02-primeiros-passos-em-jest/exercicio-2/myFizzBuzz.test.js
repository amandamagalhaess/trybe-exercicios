const myFizzBuzz = require("./myFizzBuzz");

describe('Exercicio 2', () =>{
  it('Executa a função myFizzBuzz(num), sendo num um número divisível por 3 e 5, e verifica se o retorno é "fizzbuzz"', () =>{
    expect(myFizzBuzz(15)).toBe('fizzbuzz');
  })
  it('Executa a função myFizzBuzz(num), sendo num um número divisível por 3, e verifique se o retorno é "fizz"', () => {
    expect(myFizzBuzz(9)).toBe('fizz');
  })
  it('Executa a função myFizzBuzz(num), sendo num um número divisível por 5, e verifica se o retorno é "buzz"', () => {
    expect(myFizzBuzz(10)).toBe('buzz');
  })
  it('Executa a função myFizzBuzz(num), sendo num um número que não é divisível por 3 ou 5, e verifica se o retorno é o próprio número', () => {
    expect(myFizzBuzz(8)).toBe(8);
  })
  it('Executa a função myFizzBuzz(num), sendo num um parâmetro que não é um número, e verifica se o retorno é "false"', () => {
    expect(myFizzBuzz("15")).toBe(false);
  })
})