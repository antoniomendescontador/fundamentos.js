//objeto é coleção de chave e valor ou seja atributo e seu valor

const prod1 = {}
prod1.nome = 'Celular Ultra Mega' //o atributo nome está sendo criado dinamicamente
prod1.preco = 4998.90
prod1['Desconto Legal'] = 0.4 //evitar atributo com estaço

console.log(prod1);

const prod2 = {
    nome: 'Camisa Polo',
    preco: 79.90,
    obj: {
        blaba: 1,
        obj: {
            blaba: 2
        }
    }
}
console.log(prod2);