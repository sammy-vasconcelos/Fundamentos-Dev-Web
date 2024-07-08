// Armazenando uma função dentro de uma variável:____________________________________________________________________________
const funVar = (a, b) => {
    return a + b
} 


// Return implícito:_________________________________________________________________________________________________________
const subtracao = (a, b) => a - b


// Parâmetros variáveis:_____________________________________________________________________________________________________
function soma(){
    let soma = 0
    for (i in arguments) soma += arguments[i] 
    return soma
}
// O arguments pega os valores colocados como parametros
console.log(soma("a", "b", "c"))


// Estratégia para retornar valores de parametros padrões:_____________________________________________________________________
function soma2(a,b,c){
    a = a || 1
    b = b || 1
    c = c || 1
    return a + b + c 
}
// caso o parâmetro não seja passado, os valores vão ser substituidos por 1 (valor escolhido na função)
console.log(soma2(2))
// passar o param como 0 retorna falso, o valor vai ser lido como 1, o que poderia virar um bug
console.log(soma2(0, 0, 0))


// Outras estratégias:_________________________________________________________________________________________________________
function soma3(a, b, c){
    a = a !== undefined ? a : 1
    b = 1 in arguments ? b : 1     // o 1 é o número do indice, no caso do a seria 0 e do c seria 2
    c = isNaN(c) ? 1 : c
}


// Como de fato passar paramêtros padrões (que odio >:c):______________________________________________________________________
function soma4(a = 1, b = 1, c = 1){
    return a + b + c
}
console.log(soma4())