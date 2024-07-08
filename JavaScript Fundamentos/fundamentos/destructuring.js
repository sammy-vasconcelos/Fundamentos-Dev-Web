//Operador de destructuring:

const pessoa = {
    nome: 'Sammy',
    idade: 20,
    endereco: {
        logradouro: "Rua Qualquer Coisa",
        numero: 205
    }
}

// Básicamente, está extraindo idade e nome do objeto pessoa, não sendo necessário usar pessoa.nome, apenas nome
// Atributos recebem suas respectivas variáveis
const { nome, idade } = pessoa
console.log(nome, idade)

// Caso queira colocar um nome diferente da variável para determinado atributo
const { nome: n, idade: i } = pessoa
console.log(n, i)

// objeto dentro do objeto: 
const { endereco: { logradouro, numero } } = pessoa
console.log(logradouro, numero)


// Exemplo aplicado em uma função:
function rand({ max = 1000, min = 0}){
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

const obj = { max: 50, min: 40}
console.log(rand(obj))
console.log(rand({})) // <<-- gera numeros aleátorios de acordo com a quantidade do max

// Exemplo com Array:
function rando([min = 0, max = 1000]){
    if(min > max) [min, max] = [max, min]
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

console.log(rando([0,40]))