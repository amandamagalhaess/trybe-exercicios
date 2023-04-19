Copie o código abaixo e siga as instruções de cada enunciado.

```html
<!DOCTYPE html>
<html lang="pt">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>TRYFLIX</title>
    <link rel="stylesheet" href="./style.css">
  </head>
  <body>
    <header class="header-container">
      <nav class="menu-container">
        <ul>
          <li>Cadastre-se</li>
          <li>Conecte-se</li>
          <li>Sobre</li>
        </ul>
      </nav>
      <section class="logo-container">
        <img
          src="https://fontmeme.com/permalink/201215/2044acc483426f38dc2c79c3c84ab998.png"
          alt="Website Logo"
        />
      </section>
    </header>

  </body>
</html>
```

```css
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Ubuntu';
}

body {
  background-color: rgb(247, 247, 247);
}

.header-container {
  background-color: #5C687C;
  display: flex;
}

.logo-container {
  display: flex;
  justify-content: center;
}

.menu-container {
  display: flex;
}

.menu-container ul {
  display: flex;
  justify-content: space-around;
  width: 100%;
}

.menu-container li {
  color: white;
  font-weight: 500;
  font-size: 1.3rem;
  list-style: none;
  margin-right: 10px;
}
```

1. Adicione uma propriedade flex-basis ao container do logotipo com o tamanho de 268px, e para o container do menu adicione a mesma propriedade com o tamanho de 500px. Após aplicar as propriedades, o header deverá estar similar à imagem abaixo:

![image](https://user-images.githubusercontent.com/124991642/233213690-97099f82-5f94-4df9-971e-aac2011905c3.png)

2. Adicione uma propriedade Flexbox que modifique a ordem em que o logo e os itens do menu aparecem na tela. Após aplicar a propriedade, o header deverá estar similar à imagem abaixo:

![image](https://user-images.githubusercontent.com/124991642/233213754-f27e7dfb-76d2-4a64-9654-bb55b4d9cd38.png)

3. Adicione uma propriedade Flexbox que faça o container do menu crescer, quando houver espaço disponível. Após aplicar a propriedade, o header deverá estar similar à imagem abaixo:

![image](https://user-images.githubusercontent.com/124991642/233213799-b9099e42-9950-4008-81b5-4dbb4bf0d2bc.png)

4. Utilize a propriedade align-self no elemento correto para que o header da página tenha o seguinte comportamento:

![image](https://user-images.githubusercontent.com/124991642/233213863-612dde04-d5bc-4cc1-8535-d0b4398755f3.png)

Copie o restante dos códigos HTML e CSS e aplique a seus documentos criados anteriormente.

```html
    <main class="main-container">
      <section class="movie-container">
        <section>
          <h2>Assista hoje</h2>
          <div class="card-container">
            <div>FILMES 1</div>
            <div>FILMES 2</div>
            <div>FILMES 3</div>
            <div>FILMES 4</div>
            <div>FILMES 5</div>
            <div>FILMES 6</div>
            <div>FILMES 7</div>
            <div>FILMES 8</div>
            <div>FILMES 9</div>
          </div>
        </section>
        <article>
          <h2>Mais assistidos</h2>
          <div class="card-container">
            <div>FILMES 1</div>
            <div>FILMES 2</div>
            <div>FILMES 3</div>
            <div>FILMES 4</div>
            <div>FILMES 5</div>
            <div>FILMES 6</div>
            <div>FILMES 7</div>
            <div>FILMES 8</div>
            <div>FILMES 9</div>
          </div>
        </article>
      </section>
  <aside class="aside-container">
    <h3>Últimas notícias</h3>

    <h4>Title</h4>
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet officia in provident esse excepturi ipsam!</p>

    <h4>Title</h4>
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet officia in provident esse excepturi ipsam!</p>

    <h4>Title</h4>
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet officia in provident esse excepturi ipsam!</p>
  </aside>
</main>
```

```css
.main-container {
  display: flex;
  flex-wrap: wrap;
}

.movie-container {
  display: flex;
  flex-direction: column;
}

.movie-container h2 {
  margin: 40px 0;
  text-align: center;
}

.card-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

.card-container div {
  align-items: center;
  background-color: #5C687C;
  border: black solid 1px;
  display: flex;
  height: 150px;
  justify-content: center;
  margin: 10px;
}

.aside-container {
  display: flex;
  flex-direction: column;
  margin: 20px;
}

.aside-container h3, h4 {
  margin-bottom: 10px;
  text-align: center;
}

.aside-container p {
  margin: 10px 0;
  text-align: justify;
}
```

5. Aplique uma base de 350px para seu container aside. Deverá ficar similar à imagem abaixo:

![image](https://user-images.githubusercontent.com/124991642/233214206-abb9fc45-4934-4525-bdaa-d38271aae273.png)

6. Aplique um alinhamento para centralizar e outro para expandir. Seu aside deve apresentar o seguinte comportamento:

![image](https://user-images.githubusercontent.com/124991642/233214241-c80fc9c4-c73c-493e-b703-7d5367ef90bb.png)


7. Adicione uma propriedade que faça com que seu container de filmes tenha uma base de 700px e outra base de 16% para as div do container de seu card. Deve ficar similar à imagem abaixo:

![image](https://user-images.githubusercontent.com/124991642/233214272-d9bf7d1e-2ebc-41cd-a9d9-5e9494480bfa.png)


8. Aplique uma propriedade com o valor 10 que expanda o container de filmes. Deve ficar similar à imagem abaixo:

![image](https://user-images.githubusercontent.com/124991642/233214318-605c3c98-2f10-4237-aecb-ccfde3fadff7.png)


9. Adicione uma propriedade com o valor 1 que faça com que suas div do container de filmes ocupe todo o espaço em branco. Deve ficar similar à imagem abaixo:

![image](https://user-images.githubusercontent.com/124991642/233214367-039ebc1d-679f-4a25-be4a-ec96ee774db8.png)


