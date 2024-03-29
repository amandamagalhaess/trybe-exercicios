# Praticando a implementação de testes

Considere o código abaixo para realizar o exercício:

```javascript
// encodeDecode.js

const mapString = (objectMap, string) => {
  const splitString = string.split('');
  const mappedArray = [];

  for (let index = 0; index < splitString.length; index += 1) {
    const character = splitString[index];
    const mappedValue = objectMap[character];
    
    if (mappedValue) {
      mappedArray.push(mappedValue);
    } else {
      mappedArray.push(character);
    }
  }

  return mappedArray.join('');
}

const encode = (string) => {
  const map = {
    a: 1,
    e: 2,
    i: 3,
    o: 4,
    u: 5,
  };
  return mapString(map, string);
}

const decode = (string) => {
  const map = {
    1: 'a',
    2: 'e',
    3: 'i',
    4: 'o',
    5: 'u',
  };
  return mapString(map, string);
}
```

Para as funções encode e decode, crie os seguintes testes em Jest:
  1. Teste se encode e decode são funções;
  2. Para a função encode, teste se as vogais a, e, i, o, u são convertidas em 1, 2, 3, 4 e 5, respectivamente;
  3. Para a função decode, teste se os números 1, 2, 3, 4 e 5 são convertidos nas vogais a, e, i, o, u, respectivamente;
  4. Teste se as demais letras/números não são convertidos para cada caso;
  5. Teste se a string que é retornada pelas funções tem o mesmo número de caracteres que a string passada como parâmetro.
