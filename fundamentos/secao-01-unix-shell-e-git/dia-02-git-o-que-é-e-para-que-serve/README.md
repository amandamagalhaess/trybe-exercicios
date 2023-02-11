Os exercícios deste dia foram para colocar em prática o aprendizado sobre GIT.

Os comandos da primeira parte dos exercícios são:

1 - Crie uma pasta em seu computador;
2 - Acesse a pasta que você acabou de criar;
3 - Inicie o versionamento por meio do comando git init;
4 - Abra a pasta no VS Code por meio do comando code .;
5 - Crie um arquivo chamado README.md;
6 - Adicione o arquivo novo em staging e realize um commit, como em git add . e git commit -m "Descreva a alteração realizada";
7 - Crie uma nova branch por meio do comando git checkout -b, como em git checkout -b adiciona-readme;
8 - Faça uma alteração em README.md e, depois, realize um novo commit, como em git add . e git commit -m "Alterando o README";
9 - Retorne para a branch main e, em seguida, realize o merge das alterações por meio do comando git merge nome-da-branch, como em git merge adiciona-readme.

EXERCICIOS PROPOSTOS

1 - Acesse a branch main e crie uma branch nova chamada atualiza-readme.
2 - Acesse a branch atualiza-readme e crie um arquivo chamado infos.txt.
3 - Adicione as alterações em staging e realize um commit.
4 - Adicione seu nome e sobrenome ao arquivo infos.txt.
5 - Adicione novamente as alterações em staging e realize um commit.
6 - Crie uma branch nova a partir da branch atualiza-readme. A nova branch deve se chamar adiciona-infos.
7 - Acesse a branch adiciona-infos e utilize sua criatividade para escrever o passo a passo de como o versionamento funciona no README.md. Por exemplo: “O primeiro passo é ter uma pasta versionada e criar um estrutura inicial, e fazemos isso utilizando o comando git init. O segundo passo é criar uma branch nova com o comando git branch nome-da-branch ou git checkout -b nome-da-branch…” Você pode, também, utilizar esse momento para registrar, em forma de perguntas e respostas, as dúvidas que ainda tiver sobre versionamento.
8 - Adicione as alterações em staging e realize o commit.
9 - Volte para a branch atualiza-readme e realize o merge das alterações feitas na branch adiciona-infos.
10 - Retorne para a branch main e realize o merge das alterações.