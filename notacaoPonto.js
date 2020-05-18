//notação "." serve para acessar os métodos ou atributos dos objetos e também funções
console.log(typeof console)
console.log(Math.ceil(6.1))

const obj1 = {}
obj1.nome = 'Bola'
console.log(obj1.nome)


//tornando público os atributos de uma função
function Obj(nome) {
    this.nome = nome;
    this.exec = function(){
        console.log('Exec........')
    }
}

const obj2 = new Obj('cadeira')
const obj3 = new Obj('mesa')

console.log(obj2.nome, obj3.nome)
obj3.exec()