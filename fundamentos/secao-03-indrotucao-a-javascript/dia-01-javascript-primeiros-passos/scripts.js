// Para fixar 1:

let myName = 'Amanda';

let birthCity = 'São Paulo';

let birthYear = 1999;

console.log(myName, birthCity, birthYear);

// Para fixar 2:

let base = 5;

let height = 8;

let area = base * height;
  console.log(area);

let perimeter = 5 + 5 + 8 + 8;
  console.log(perimeter);

// Para fixar 3:

let nota = 90;

if(nota >= 80){
  console.log('Parabéns, você faz parte do grupo de pessoas aprovadas!');
}

else if(nota >= 60 && nota < 80){
  console.log('Você está na nossa lista de espera.');
}
else{
  console.log('Infelizmente, você reprovou.');
}

// Para fixar 4:

let currentHour = 18;

let message;

if(currentHour >= 22){
  message = 'Não deveríamos comer nada, é hora de dormir';
}
else if(currentHour >= 18 && currentHour < 22){
  message = 'Rango da noite, vamos jantar :D';
}
else if(currentHour >= 14 && currentHour < 18){
  message = 'Vamos fazer um bolo pro café da tarde?'
}
else if(currentHour >= 11 && currentHour < 14){
  message = 'Hora do almoço!!!';
}
else if(currentHour >= 4 && currentHour < 11){
  message = 'Hmmm, cheiro de café recém-passado';
}

console.log(message);

// Para fixar 5:

let weekDay = 'quarta-feira';

if(weekDay === 'segunda-feira' || weekDay === 'terça-feira' || weekDay === 'quarta-feira' || weekDay === 'quinta-feira' || weekDay === 'sexta-feira') {
  console.log('Oba, mais um dia de aprendizado na Trybe >:D');
}
else{
  console.log('FINALMENTE, descanso merecido! UwU!');
}

// Para fixar 6:

let statusProcesso = 'aprovada';

switch(statusProcesso){
  case 'aprovada':
    console.log('Parabéns, você está no grupo de pessoas aprovadas!');
    break;

  case 'lista':
    console.log('Você está na nossa lista de espera.');
    break;

  case 'reprovada':
    console.log('Infelizmente, você reprovou.');
    break;

  default:
    console.log('Informação incorreta.');
}
