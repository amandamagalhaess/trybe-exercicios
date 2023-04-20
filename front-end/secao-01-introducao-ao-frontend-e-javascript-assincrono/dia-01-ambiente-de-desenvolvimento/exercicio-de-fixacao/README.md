# Exercício - Clipboard copy

* Ao clicar na senha gerada, a aplicação deverá copiar a senha para a área de transferência. Para isso, instale e utilize a biblioteca https://www.npmjs.com/package/clipboard-copy.

Utilize o código abaixo para realizar o exercício:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Gerador de Senhas Seguras</title>
  </head>
  <body>
    <main>
      <h1>🔐 Gerador de Senhas Seguras</h1>
      <button>Gerar Senha Segura</button>
      <h2>...</h2>
    </main>
    <script type="module" src="./src/main.js"></script>
  </body>
</html>
```

```js
import { nanoid } from 'nanoid';
import './style.css';

const passwordBtnEl = document.querySelector('button');
const displayPasswordEl = document.querySelector('h2');
passwordBtnEl.addEventListener('click', () => {
  const randomPassword = nanoid();
  displayPasswordEl.innerHTML = randomPassword;
});
```

```css
body {
  background-color: #505050;
  color: white;
  font-family: Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue',
    sans-serif;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}

main {
  background-color: rgba(255, 255, 255, 0.1);
  max-width: 600px;
  border-radius: 10px;
  padding: 10px 30px;
}

h2 {
  color: #e8a4f0;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 5px;
  padding: 10px;
}

button {
  background-color: #9d1fae;
  border: 0 none;
  padding: 10px;
  font-size: 20px;
  color: white;
  border-radius: 5px;
  cursor: pointer;
  margin: 10px;
}
```