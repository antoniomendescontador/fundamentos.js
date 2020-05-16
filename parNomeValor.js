//par nome e valor
const saudacao = 'ola'; //contexto léxico 1

function exec() {
    const saudacao = 'Falaaa'; //contexto léxico 2
    return saudacao
}
//objetos são grupos aninhados de par chave/valor

const Cliente = {
    nome: 'Antonio',
    idade: 35,
    peso: 79,
    endereco: {
        logradou: 'rua',
        numero: 123,

    }
}

console.log(saudacao);
console.log(exec());
console.log(Cliente);