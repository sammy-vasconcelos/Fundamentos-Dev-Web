function getPreco(imposto = 0, moeda = "R$"){
    return `${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)}`
}

const produto = {
    nome: "notebook",
    preco: 4000,
    desc: 0.15,
    getPreco
}

console.log(produto.getPreco())


const carro = { preco: 40000, desc: 0.15}

console.log(getPreco.call(carro))
console.log(getPreco.apply(carro))

// No call, passamos primeiro o parametro do contexto e depois os parametros da função
console.log(getPreco.call(carro, 0.17, '$'))
console.log(getPreco.apply(carro, [0.19, '$$$']))

