# 1 - scripts.js

## Para fixar 1

1. Obtenha o valor “Serviços” do array menu:

```javascript
let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
let menuServices = ;

console.log(menuServices);
```

2. Procure o índice do valor “Portfólio” do array menu:

```javascript
let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
let indexOfPortfolio = ;

console.log(indexOfPortfolio);
```

3. Adicione o valor “Contato” no final do array menu.
De olho na dica 👀: Use o método .push()

```javascript
let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];

console.log(menu);
```

## Para fixar 2

1. Utilize o for para imprimir os elementos da lista groceryList com o console.log():

```javascript
let groceryList = ['Arroz', 'Feijão', 'Alface', 'Melancia'];
```

## Para fixar 3

1. Utilize o for/of para imprimir os elementos da lista names com o console.log():

```javascript
let names = ['João', 'Maria', 'Antônio', 'Margarida'];
```

# 2 - exercicios-3.2.js

## Lidando com arrays

* Considere esse array para realizar os próximos exercícios.

```javascript
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
```

  1. Percorra o array imprimindo todos os valores contidos nele com a função console.log().
  2. Some todos os valores contidos no array e imprima o resultado.
  3. Calcule e imprima a média aritmética dos valores contidos no array.
  4. A média aritmética é o resultado da soma de todos os elementos dividido pelo número total de elementos.
  5. Com base no código que acabou de gerar, referente ao calculo da média aritmética, faça com que: caso o valor final seja maior que 20, imprima a mensagem “O valor da média aritmética é maior que 20”; e, caso não seja maior que 20, imprima a mensagem “O valor da média aritmética é menor ou igual a 20”.
  6. Utilizando for, descubra o maior valor contido no array e imprima-o.
  7. Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: “Nenhum valor ímpar encontrado”.
  8. Utilizando for, descubra o menor valor contido no array e imprima-o.
  9. Utilizando for, crie um array que vá de 1 a 25 e imprima o resultado.
  10. Utilizando o array que acabou de criar, imprima o resultado da divisão de cada um dos elementos por 2.

## Lógica de programação e algoritmos

* O fatorial é a multiplicação de um número natural pelos seus antecessores, exceto o zero. Por exemplo:

```javascript
O fatorial é representado pelo sinal !
4! = 4 x 3 x 2 x 1 = 24
```

  1. Com base nessas informações, crie um algoritmo que imprima na tela o fatorial de 10.

  2. Utilize a estrutura de repetição for para desenvolver um algoritmo que seja capaz de inverter uma palavra, como a palavra “banana” para “ananab”. Utilize a string abaixo como exemplo. Depois, troque-a por outras para verificar se seu algoritmo está funcionando corretamente.

```javascript
let word = 'tryber';
```

* Considere o array de strings abaixo:

```javascript
let array = ['java', 'javascript', 'python', 'html', 'css'];
```

  3. Utilize a estrutura de repetição for para escrever dois algoritmos: um que imprima no console a maior palavra desse array e outro que imprima a menor. Considere o número de caracteres de cada palavra.
  4. Um número primo é um número inteiro maior que 1 que possui somente dois divisores, ou seja, é divisível por 1 e por ele mesmo. Sabendo disso, escreva um algoritmo que imprima no console o maior número primo entre 2 e 50.

## Bônus - Ordenação Bubble Sort

  1. Ordene o array numbers em ordem crescente e imprima seus valores.

```javascript
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
```
  2. Ordene o array numbers em ordem decrescente e imprima seus valores.

```javascript
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
```
  3. Agora, crie um novo array a partir do array numbers, sem perdê-lo. Cada valor do novo array deverá ser igual ao valor correspondente no array numbers multiplicado pelo seguinte. Por exemplo: o primeiro valor do novo array deverá ser 45, pois é a multiplicação de 5 (primeiro valor) e 9 (valor seguinte). Já o segundo valor do novo array deverá ser 27, pois é a multiplicação de 9 (segundo valor) e 3 (valor seguinte), e assim por diante. Caso não haja valor seguinte, a multiplicação deverá ser feita por 2. Faça isso utilizando o for e o método push. O resultado deve ser o array abaixo:

```javascript
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// resultado esperado:
[45, 27, 57, 1330, 560, 800, 200, 70, 945, 54]
```

  4. Agora, trabalhe com algumas formas geométricas! Utilize a estrutura de repetição for para escrever os códigos a seguir.

  5. Escreva um algoritmo que, dado um valor n positivo, ou seja, n > 1, imprima na tela um quadrado feito de asteriscos de tamanho n. Por exemplo:

```javascript
n = 5

*****
*****
*****
*****
*****
```

  6. Faça o mesmo algoritmo que antes, mas de modo que imprima um triângulo retângulo com 5 asteriscos de base. Por exemplo:

```javascript
n = 5

*
**
***
****
*****
```

  7. Agora, inverta o lado do triângulo. Por exemplo:

```javascript
n = 5

    *
   **
  ***
 ****
*****
```

**⚠️Atenção!** Note que esse exercício é bem mais complexo que o anterior! Não basta, aqui, imprimir somente asteriscos. Você precisa de uma lógica para imprimir espaços também.

  8. Depois, faça uma pirâmide com n asteriscos de base. Por exemplo:

```javascript
n = 5

  *
 ***
*****
```

  9. Faça uma pirâmide com n asteriscos de base que seja vazia no meio. Para isso, assuma que o valor de n será sempre ímpar. Por exemplo:

```javascript
Por último, faça com que a variável seja incrementada com o valor correspondente a cada *loop*.
n = 7

   *
  * *
 *   *
*******
```

  10. Faça um algoritmo que indique se um número definido em uma variável é primo ou não.
    * Um número é classificado como primo se ele é maior do que 1 e divisível apenas por 1 e por ele mesmo, ou seja, a divisão dele por quaisquer outros números dá resto diferente de zero. Lembrando que números primos, são números naturais, ou seja, também não podem ser divididos por números negativos Exemplos: 13 é um número primo, pois é divisível por 1 e por 13, apenas. Já o número 20 não é primo, pois pode ser dividido por 1, 2, 4, 5, 10 e 20, todos com resto zero.
    * Dica: você vai precisar fazer um loop que vá de 0 ao número definido. Além disso, vai precisar fazer uma checagem a cada iteração e armazenar os resultados em algum lugar.




