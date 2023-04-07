// Crie uma função chamada arrayOfNumbers, que receberá a variável vector como parâmetro.

// Por meio de um loop for, percorra essa variável, busque os números pares e os adicione a um novo array, que deverá ser retornado pela função no fim.

let vector = [[1, 2], [3,4,5,6], [7,8,9,10]];

const arrayOfNumbers = (vector) => {
  let evenNumbers = [];
  
  vector.forEach((numberArr) => {
    for (let index = 0; index < numberArr.length; index += 1) {
    if (numberArr[index] % 2 === 0) {
      evenNumbers.push(numberArr[index]);
    }
  }
  });
  
  return evenNumbers;
}

console.log(arrayOfNumbers(vector));