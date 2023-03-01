// Para praticar 1

let saldo = 5000;

function adicionaValor(valor) {
    return saldo + valor;
}

function subtraiValor(valor) {
    return saldo - valor;
}

function multiplicaValor(valor) {
    return saldo * valor;
}

function divideValor(valor) {
    return saldo / valor;
}

console.log(adicionaValor(3000));
console.log(subtraiValor(1000));
console.log(multiplicaValor(3/100));
console.log(divideValor(2));

// Para praticar 2

let clientesTrybeBank = ['Ada', 'John', 'Gus'];

function addClients(name) {
    if(typeof name === 'string') {
        clientesTrybeBank.push(name);
        return 'Cliente adicionado!'
    }
    else {
        return 'Parametro não é do tipo string';
    }
}

console.log(addClients('Amanda'));
console.log(addClients(10));
console.log(clientesTrybeBank);

function deleteClients(name) {
    if (typeof name === 'string' && clientesTrybeBank.includes(name)) {
        clientesTrybeBank.splice(clientesTrybeBank.indexOf(name), 1);
        return 'Cliente excluído!';
    }
    else if (typeof name !== 'string') {
        return 'Parametro não é do tipo string';
    }
    else {
        return 'Cliente não encontrado';
    }
}

console.log(deleteClients('Ada'));
console.log(deleteClients('Breno'));
console.log(deleteClients(10));
console.log(clientesTrybeBank);