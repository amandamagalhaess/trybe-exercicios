# Para fixar

## 1 - index.html e style.css

1. Reproduza o layout de caixas abaixo

![image](https://user-images.githubusercontent.com/124991642/232257989-58244e87-6909-4d63-af87-8d6ed794e61c.png)

## 2 - index2.html e style2.css

Utilize o HTML e CSS a seguir como ponto de partida para resolver os exercícios:

```html
<!DOCTYPE html>
<html lang="pt-br">
  <head>
    <meta charset="UTF-8">
    <title>Mario</title>
    <link rel="stylesheet" href="./style.css" />
  </head>
  <body>
    <h1>Exercício do Mario</h1>
    <img src="https://bit.ly/39HLUyi" alt="jumpMario" class="super-mario" />
    <img src="https://bit.ly/3arGfMc" alt="goomba" class="goomba" />
    <img src="https://bit.ly/3AVnjks" alt="bowser" class="bowser" />
    <p class="speach">
      Goomba, do something!
    </p>
    <img src="https://bit.ly/3tmxgED" alt="baloon" class="baloon" />
  </body>
</html>
```

```css
.super-mario {
  width: 200px;
}

.goomba {
  width: 100px;
}

.baloon {

}

.speach {
  font-size: 25px;
}

.bowser {
  width: 200px;
}
```

1. Posicione o Mário acima do Goomba.
2. Posicione o Bowser à direita do Goomba.
3. Posicione o balão para que se torne uma fala de Bowser.
4. Posicione o texto da tag p para que fique dentro do balão de fala.

## 3 - index3.html e style3.css

Copie o código HTML abaixo e faça o que for pedido:

```html
<!DOCTYPE html>
<html lang="pt-br">
  <head>
    <meta charset="UTF-8">
    <title>Agrupando Seletores</title>
    <link rel="stylesheet" href="style.css">
  </head>
  <body>
    <h1>Lista dos Melhores Sites que já vi</h1>
    <p>Top 3 dos melhores sites que existem na web</p>
    <p>Principais motivos para eu gostar deles</p>
  </body>
</html>
```

1. Adicione uma lista ordenada dos 3 melhores sites que você conhece.
2. Crie um arquivo no mesmo diretório e nomeie-o de ‘style.css’.
3. Nesse arquivo .css, adicione os estilos para que:
  1. O texto das tags ‘h1’ e ‘p’ estejam centralizados.
  2. A cor de fundo da sua lista mude quando o cursor estiver sobre o item.
  3. A fonte do item mude quando ele for clicado.
4. Adicione uma lista não ordenada com, pelo menos, 3 características que você gosta.
5. No ‘style.css’, adicione a propriedade ‘list-style: none’ para ambas as listas.


## 4 - index4.html e style4.css

Para este exercício, você não deve atribuir nenhuma classe ou id aos componentes, mas apenas utilizar pseudo-classes para individualizar cada elemento!

```html
<!DOCTYPE html>
<html lang="pt-br">
<head>
  <meta charset="UTF-8">
  <title>Pseudo-classes</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <h1>Paleta de Cores</h1>
  <p>Vamos criar uma paleta de cores com as divs abaixo:</p>
  <div>
    <h3>Cor primária</h3>
  </div>
  <div>
    <h3>Cor Secundária</h3>
  </div>
  <div>
    <h3>Cor Complementar</h3>
  </div>
  <div>
    <h3>Cor Escura</h3>
  </div>
  <div>
    <h3>Cor Clara</h3>
  </div>
</body>
</html>
```

1. Estilize as divs para que, ao passar o cursor por cima das mesmas, elas ganhem uma borda.
2. Faça cada div ter uma cor de fundo própria.
3. Estilize cada uma das tags h3 da maneira que achar melhor (cor, tamanho, estilo e família).
4. Faça a terceira div ser maior que as demais.
5. Deixe as tags ímpares h3 com o texto em itálico.

## 5 - index5.html e style5.css

```html
<!DOCTYPE html>
<html lang="pt-br">
  <head>
    <meta charset="UTF-8">
    <link rel="stylesheet" href="style.css">
    <title>#GoTrybe</title>
  </head>
  <body>
    <h1><em>Combinações e Classes Descendentes</em></h1>
    <br />
    <h3>Top 5 frases memoráveis:</h3>
    <ol>
      <li><em>Com grandes poderes vêm grandes responsabilidades.</em> - Tio Ben (Homem Aranha)</li>
      <li><em>Houston, temos um problema.</em> - Jack Swigert</li>
      <li><em>Sempre parece impossível até que esteja feito.</em> - Nelson Mandela</li>
      <li><em>Parte da jornada é o fim.</em> - Tony Stark (Homem de Ferro)</li>
      <li><em>Às vezes, o melhor que podemos fazer é começar novamente.</em> - Steve Rogers (Capitão América)</li>
    </ol>
    <h3>As maiores linguagens de programação:</h3>
    <ul>
      <li>Python</li>
      <li>Java</li>
      <li>JavaScript</li>
      <li>C#</li>
      <li>C / C++</li>
    </ul>
    <h3>Maiores aliados de uma pessoa desenvolvedora:</h3>
    <ul>
      <li>
        <a href="https://pt.stackoverflow.com/" target="_blank">StackOverflow</a>
      </li>
      <li>
        <a href="https://www.w3schools.com/" target="_blank">W3Schools</a>
      </li>
      <li>
        <a href="https://developer.mozilla.org/pt-BR/" target="_blank">MDN Web Docs</a>
      </li>
      <li>
        <a href="https://devdocs.io/" target="_blank">DevDocs</a>
      </li>
      <li>
        <a href="https://app.betrybe.com/" target="_blank">Trybe</a>
      </li>
    </ul>
  </body>
</html>
```

Crie o arquivo style.css e resolva os seguintes exercícios:

1. Faça com que todos os itens de Listas Ordenadas tenham uma cor de fundo amarela. Se a numeração do item for PAR, faça a cor de fonte ser verde. Se o número for considerado ÍMPAR, utilize a propriedade text-transform para deixar o texto maiúsculo. (Dica: combinar classes pode ser útil aqui).
2. Faça todas as tags Header (h1, h2…) possuírem cor de fonte vermelha e, se alguma delas estiver em itálico, aumente seu tamanho para 40px e acrescente uma borda de 1px preta e sólida.
3. Faça todas as li’s terem 20px de tamanho de fonte e, para todo texto em itálico dentro de alguma li, utilize a propriedade font-weight para deixá-lo negrito.
4. Na listagem de linguagens de programação, faça com que as 3 primeiras da lista possuam cor de fonte azul e, se alguma possuir “java*” no texto, utilize uma cor de fundo rosa.
(Bônus) Para cada link na lista de aliados da pessoa desenvolvedora, faça com que ao passar o mouse sobre cada um, o texto fique em negrito e assuma a cor de fonte “temática do site”
