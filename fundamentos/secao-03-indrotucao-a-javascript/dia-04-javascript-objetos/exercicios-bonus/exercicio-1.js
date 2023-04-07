// Faça um programa que receba uma string em algarismos romanos e retorne o número que a string representa.

const romanNumerals = {
  I: 1,
  IV: 4,
  V: 5,
  IX: 6,
  X: 10,
  XL: 40,
  L: 50,
  XC: 90,
  C: 100,
  CD: 400,
  D: 500,
  CM: 900,
  M: 1000,
}

const transformNumerals = (string) => {
  for (const key in romanNumerals) {
    if (string === key) {
      const number = romanNumerals[key]; 
      return number;
    }
  }
}
console.log(transformNumerals('XL'));

