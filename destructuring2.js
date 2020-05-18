// novo recurso do ES2015
//desestruturação de objeto

const pessoa = {
    nome: 'tony',
    idade: 35,
    endereco: {
        logradouro: 'rua 123',
        numero: 1000
    }

}

const {nome, idade} = pessoa
console.log(nome, idade);

const {nome: n, idade: i} = pessoa
console.log(n, i);

const { sobrenome, bemHumorada = true } = pessoa
console.log(sobrenome, bemHumorada);


const { endereco: {logradouro, numero, cep} } = pessoa
console.log(logradouro, numero, cep);
