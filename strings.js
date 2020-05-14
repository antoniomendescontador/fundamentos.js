//string: é uma cadeia de caracteres
//literal: dado sem armazenar em uma variável
const escola = 'Cod3r' //começa contar pela 0

console.log(escola.charAt(4)); //traz a posição da cadeira de caracteres
console.log(escola.charAt(5)); //não retorna valor pois a cadeia de caracteres vai de 0 a 4 estou pedindo o 5
console.log(escola.charCodeAt(3)); //valor na tabela ASC ou unicode
console.log(escola.indexOf('d'))//retorna a posição da primeira ocorrencia
console.log(escola.substring(1))
console.log(escola.substring(1, 3))
console.log('Escola '.concat(escola).concat('!'))
console.log(escola.replace('3', 'e'))
console.log('Ana,Pedro,Marcos'.split(',')) //strint separadas por vírgula


