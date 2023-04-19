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
















