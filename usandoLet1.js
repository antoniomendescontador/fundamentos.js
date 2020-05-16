//enquando o var não tem escopo de bloco o let possui escopo de bloco
// ou seja faz diferenciação entre o escopo global e o de bloco
//onde o escopo de bloco tem preferência ao escopo global
var numero = 1;

{
    let numero = 2;
    console.log('dentro = ', numero);
}

console.log('fora = ', numero);