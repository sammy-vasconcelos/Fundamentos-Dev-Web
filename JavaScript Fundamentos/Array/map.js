// Serve para transformar um array
// percorre cada elemento e o resultado é um novo array do mesmo tamanho com os dados tranformados 
// o array inicial não é modificado


const nums = [1,2,3,4,5]

let result = nums.map(function(e){
    return e * 2
})

console.log(result)

// Map pode ser encadeado
const soma = e => e + 10
const mult = e => e * 10
const dinheiro = e => `R$ ${parseFloat(e).toFixed(2).replace('.',',')}`

const result2 = nums.map(soma).map(mult).map(dinheiro)
console.log(result2)
// o resultado dos maps se juntaram
// retorna [ 'R$ 110,00', 'R$ 120,00', 'R$ 130,00', 'R$ 140,00', 'R$ 150,00' ]



//Desafio 
const carrinho = [
    '{"preco": 10.0, "nome": "feijao"}',
    '{"preco": 9.0, "nome": "sorvete"}',
    '{"preco": 6.0, "nome": "carne"}',
    '{"preco": 20.0, "nome": "flores"}'
]

toJson = e => JSON.parse(e)
getKeys = e => `R$ ${Object.values(e)[0].toFixed(2)}`

const result3 = carrinho.map(toJson).map(getKeys)
console.log(result3)