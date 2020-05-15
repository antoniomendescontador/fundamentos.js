//armazenando função(anônima) numa variavel ou constante
const imprimirSoma = function (a, b){
    console.log(a+b)
}

imprimirSoma(2,8)

//armazenando uma função arrow em uma variável
const soma = (a, b) => {
    return a + b;
}

console.log(soma(2,5))

//função arrow com retorno implicito
const subtracao = (a, b) => a - b;
console.log(subtracao(4,2));

const imprimirNome = n => console.log(n);
imprimirNome('Antonio')