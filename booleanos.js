let isAtivo = false;
console.log(isAtivo);

isAtivo = true;
console.log(isAtivo);

isAtivo = 1;
console.log(!!isAtivo);

//utilizando o !! infere o valor original do atributo se é falso ou true
console.log('os verdadeiros....');
console.log(!!1);//números são verdadeiros com exceção do 0
console.log(!!' ');
console.log(!![]);
console.log(!!{});
console.log(!!Infinity);
console.log(!!(isAtivo = true))

console.log('os falsos.....')
console.log(!!0);
console.log(!!'');
console.log(!!null);
console.log(!!NaN);
console.log(!!undefined);

console.log('para finalizar.........')
console.log(!!('' || null || 0 || ' '));

console.log('exemplo de uso para valor padrão.........')
let nome = '';
console.log(nome || 'Desconhecido');