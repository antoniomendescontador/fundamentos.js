//agrupa múltiplos valores de forma linear
//e enumera essas valores índices

const valores = [7.7, 8.9, 6.3, 9.2];
console.log(valores[0], valores[3]);
console.log(valores[4]);

//incluindo um indice
valores[4] = 10.8;
console.log(valores);
console.log(valores.length)//tamanho

//incluindo um indice fora do intervalo
//valores[15] = 6.4;
//console.log(valores);

//em js array é heterogênio aceitando multiplos valores
valores.push({id: 3}, false, null, 'teste');
console.log(valores)

console.log(valores.pop()) //retira último valor do array
delete valores[0];
console.log(valores);
console.log(typeof valores);