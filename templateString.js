//interpolando string no js
// dá mais poder para a string

const nome = 'Rebeca';
const contatenacao = 'Olá ' + nome + '!';
const template = `
    Olá
    ${nome}!`

console.log(contatenacao, template);

//colocando expressões dentro do template string
console.log(`1 + 1 = ${1+1}`)

//funções dentro do templatestring
const up = texto => texto.toUpperCase();
console.log(`Ei...${up('Cuidado')}`)