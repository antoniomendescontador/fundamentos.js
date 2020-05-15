//função sem retorno
function somarDoisValores(a, b){
    console.log(a + b);
}

somarDoisValores()
somarDoisValores(2)
somarDoisValores(2, 3)
somarDoisValores(2, 10, 4, 3, 5)//somaria os 2 primeiros e desconsidera os demais

//função com retorno com valor padrão para um dos parâmetros
function soma(a, b = 0){
    return a + b
}

console.log(soma(2,3));
console.log(soma(2));