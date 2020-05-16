//um objeto é uma função mas o objeto ou uma funcão instanciada é um Objeto
// uma classe é uma função mas uma classe instanciada é um objeto
// a forma de criar objeto ou classe em js é a partir de uma função

console.log(typeof Object);
console.log(typeof new Object); //pode chamar com ou sem parenteses

const Cliente = function () { };
console.log(typeof Cliente);
console.log(typeof new Cliente); //pode chamar com ou sem parenteses

class Produto {} //ES 2015 (ES6)
console.log(typeof Produto)
console.log(typeof new Produto) //pode chamar com ou sem parenteses