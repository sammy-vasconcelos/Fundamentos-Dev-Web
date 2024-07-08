// uma função anônima é uma função sem nome 
const soma = function (x, y){
    return x + y
}

const imprimirResult = function (a, b , operacao = soma){
    console.log(`O resultado é: ${soma(a, b)}`)
}

imprimirResult(3, 6)