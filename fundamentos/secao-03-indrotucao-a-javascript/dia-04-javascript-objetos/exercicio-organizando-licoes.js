let lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

let lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

let lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

// Crie uma função para adicionar o turno da noite na lesson2. Essa função deve ter três parâmetros: o objeto a ser modificado, a chave a ser adicionada e o valor dela.

const modifyLesson2 = (obj, key, value) => {
  obj[key] = value;
}

modifyLesson2(lesson2, 'turno', 'noite');

// Crie uma função para listar as keys de um objeto. Essa função deve receber um objeto como parâmetro.

const objectKeys = (obj) => {
  return Object.keys(obj);
}

const objectLength = (obj) => {
  return Object.keys(obj).length;
}

// Crie uma função para listar os valores de um objeto. Essa função deve receber um objeto como parâmetro.

const objectValues = (obj) => {
  return Object.values(obj);
}

// Crie um objeto de nome allLessons, que deve agrupar todas as aulas por meio do Object.assign. Cada chave desse novo objeto será uma aula, portanto essas chaves serão nomeadas lesson1, lesson2 e lesson3. Ao executar o comando console.log(allLessons), a saída deverá ser a seguinte:

/*
{
  lesson1:
   { materia: 'Matemática',
     numeroEstudantes: 20,
     professor: 'Maria Clara',
     turno: 'manhã' },
  lesson2:
   { materia: 'História',
     numeroEstudantes: 20,
     professor: 'Carlos',
     turno: 'noite' },
  lesson3:
   { materia: 'Matemática',
     numeroEstudantes: 10,
     professor: 'Maria Clara',
     turno: 'noite' }
};
*/

let allLessons = Object.assign({}, {
  lesson1: lesson1,
  lesson2: lesson2,
  lesson3: lesson3,
});
console.log(allLessons);

// Com base no objeto elaborado no tópico anterior, crie uma função que retorne o número total de estudantes em todas as aulas.

const totalStudents = () => {
  let sum = allLessons.lesson1.numeroEstudantes + allLessons.lesson2.numeroEstudantes
    + allLessons.lesson3.numeroEstudantes;
  return sum;
}
console.log(totalStudents());

// Crie uma função que obtenha o valor da chave de acordo com sua posição no objeto.

const getValueByPosition = (obj, position) => {
  return Object.values(obj)[position];
}

const verifyPair = (obj, key, value) => {
  if (obj[key] === value) {
    return true;
  }
  return false;
}
console.log(verifyPair(lesson3, 'turno', 'noite'));