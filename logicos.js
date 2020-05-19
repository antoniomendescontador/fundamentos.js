function compras(trabalho1, trabalho2) {
    const comprarSorvete = trabalho1 || trabalho2  //operador ou
    const comprarTv50 = trabalho1 && trabalho2 //operador "e"
    //const comprarTv32 = !!(trabalho1 ^ trabalho2) //bitwesa xor ou exclusivo
    const comprarTv32 = trabalho1 != trabalho2
    const materSaudavel = !comprarSorvete //operador unário

    return { comprarSorvete, comprarTv32, comprarTv50, materSaudavel } //retorno de um objeto complexo
}

console.log(compras(true, true));
console.log(compras(true, false));
console.log(compras(false, true));
console.log(compras(false, false));