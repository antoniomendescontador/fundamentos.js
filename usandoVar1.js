//variável criada fora de uma função tem scopo global
//variável criada dentro da função tem o scopo daquela função
//fuja do scopo global

{ 
    { 
        { 
            { 
                var sera = "Será!!!"
                console.log(sera); 
            } 
        } 
    } 
}

console.log(sera)

function teste() {
    var local = 123 //dentro da função a variação ficará visível apenas neste escopo
}

teste()
console.log(local)