//referência por valor e referencia por indicação
//a referencia de tipos primitivos devolve uma cópia
//a referencia sem ser tipos primitivos devolve apenas aponto o endereço

let valor //não inicializada
console.log(valor);

valor = null; //ausencia de valor
console.log(valor)
//console.log(valor.toString())

const produto = {}
console.log(produto.nome)
console.log(produto)

produto.preco = 3.50
console.log(produto)

produto.preco = undefined //evite atribuir undefinid
console.log(!!produto.preco);
console.log(produto)

produto.preco = null //sem preço
console.log(!!produto.preco)
console.log(produto)


