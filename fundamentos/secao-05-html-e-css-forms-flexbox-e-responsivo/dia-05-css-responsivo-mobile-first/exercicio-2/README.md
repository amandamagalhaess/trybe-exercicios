# Execícios - Criar página para tela pequena

## Criar uma página para uma tela pequena

Antes de começar, copie o template HTML e CSS abaixo e salve em seus respectivos arquivos:

```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Media Query Demo</title>
  <link rel="stylesheet" href="small-screen.css" />
</head>
  <body>
    <header>
      <h1>Media Query Demo</h1>
    </header>
    <article>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti, ipsum quae veritatis in nihil laudantium labore beatae nulla laborum rem. Error, molestiae eaque quod placeat at. Labore architecto minus accusantium.
      </p>
    </article>
    <main>
      <h2>Box Columns</h2>
      <section>
        <figure>
          <img src="http://placekitten.com/452/450?image=12" alt="Placeholder kitteh">
          <figcaption>Place Kittens are great</figcaption>
        </figure>
        <figure>
          <img src="http://placekitten.com/452/450?image=5" alt="Placeholder kitteh">
          <figcaption>Place Kittens are great</figcaption>
        </figure>
        <figure>
          <img src="http://placekitten.com/452/450?image=1" alt="Placeholder kitteh">
          <figcaption>Place Kittens are great</figcaption>
        </figure>
        <figure>
          <img src="http://placekitten.com/452/450?image=9" alt="Placeholder kitteh">
          <figcaption>Place Kittens are great</figcaption>
        </figure>
        <figure>
          <img src="http://placekitten.com/452/450?image=6" alt="Placeholder kitteh">
          <figcaption>Place Kittens are great</figcaption>
        </figure>
        <figure>
          <img src="http://placekitten.com/452/450?image=16" alt="Placeholder kitteh">
          <figcaption>Place Kittens are great</figcaption>
        </figure>
      </section>
    </main>
  </body>
</html>
```

```css
/*
 * @see http://www.paulirish.com/2012/box-sizing-border-box-ftw/
 * apply a natural box layout model to all elements, but allowing components to change
 */
 html {
  box-sizing: border-box;
}

*, *:before, *:after {
  box-sizing: inherit;
}

body {

}

article {

}

h1 {

}

h2 {

}

img {
  max-width: 100%;
}

main {

}

section {

}

figure {
  margin: 0;
}

figcaption {
  font-size: .8em;
}
```

* Realize as seguintes tarefas:

1. Faça o tamanho da fonte ser maior;
2. Faça o tamanho da fonte dos elementos h1 e h2 serem menores;
3. Aumente o espaçamento entre as figuras;
4. Adicione um pouco de margin na página.

Bora mexer na responsividade do nosso site? Antes iremos determinar um padrão de tamanho para cada dispositivo e para isso você pode usar esse link de referência:

```html
max-width: 600px: Telas de celular. (Mobile devices)
min-width: 600px: iPads, Tablets
min-width: 768px: Telas menores, laptops
min-width: 992px: Desktops
min-width: 1200px — Telas grandes, screens e TV.
```

1. Agora que temos um padrão, vamos criar um breakpoint para telas menores de laptops. Para isso, podemos consultar a tabela acima e utilizar o min-width: 768px e quando estivermos em telas menores que 768px, esse estilo não vai ser aplicado. Esse será o primeiro breakpoint do layout. Um breakpoint é apenas um ponto onde estamos definindo que o design atual deve mudar. Ok?
2. Crie uma media query no seu arquivo CSS, usando a dimensão em pixels que você guardou como o min-width que foi apresentado acima.
3. Altere a cor de fundo (isso vai te ajudar a perceber quando a media query teve efeito);
4. Ajuste o tamanho da fonte;
5. Ajuste as margens da página;
6. Faça as imagens serem mostradas em duas colunas.
7. Agora, você vai criar outro breakpoint para telas grandes, como por exemplo, desktops. Para isso, você pode consultar novamente a tabela com os tamanhos.
8. Crie uma nova media query no seu arquivo CSS usando a dimensão para telas de desktop e realize os seguintes ajustes dentro do breakpoint (aqui podemos usar o tamanho de tela de 992px):
  * Altere a cor de fundo;
  * Ajuste o tamanho da fonte;
  * Ajuste as margens da página;
  * Adicione a propriedade max-width à página, para garantir que a largura das linhas não fique muito grande.






