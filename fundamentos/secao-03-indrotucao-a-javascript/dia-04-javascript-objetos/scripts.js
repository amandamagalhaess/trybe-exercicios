// Para fixar 1:

let player = {
    name: 'Marta',
    lastName: 'Silva',
    age: 34,
    medals: {
        golden: 2,
        silver: 3,
    },
};

player.bestInTheWorld = [2006, 2007, 2008, 2009, 2010, 2018];

console.log('A jogadora ' + player.name + ' ' + player.lastName + ' tem ' + player.age + ' anos de idade.');
console.log('A jogadora ' + player.name + ' ' + player.lastName + ' foi eleita a melhor do mundo por ' + player['bestInTheWorld'].length + ' vezes.');
console.log('A jogadora possui ' + player.medals.golden + ' medalhas de ouro e ' + player.medals.silver + ' medalhas de prata.');

// Para fixar 2:

let names = {
    person1: 'João',
    person2: 'Maria',
    person3: 'Jorge',
};

for (let key in names) {
    console.log('Olá, ' + names[key]);
}

let car = {
    model: 'A3 Sedan',
    manufacturer: 'Audi',
    year: 2020
};

for (let key in car) {
    console.log(key + ': ' + car[key]);
}

// adicionando novas chaves

let student = {};

const addProperty = (object, key, value) => {
    object[key] = value;
}

let newKey = 'nome';
let name = 'Amanda';

addProperty(student, newKey, name);

newKey = 'e-mail';
let email = 'mandaamagalhaes@gmail.com';

addProperty(student, newKey, email);

newKey = 'telefone';
let telefone = '(33) 991509960';

addProperty(student, newKey, telefone);

console.log(student);