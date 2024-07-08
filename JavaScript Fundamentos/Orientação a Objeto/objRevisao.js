const produto = new Object
produto.nome = "Cadeira"
produto['marca'] = "Ablublbu"
produto.preco = 220

console.log(produto)

delete produto.preco
delete produto['marca']
console.log(produto)

const carro = {
    preco: 40404040,
    modelo: "A4",
    proprietario: {
        nome: "Sammy",
        enderaco: {
            logradouro: "Rua qualquer",
            numero: 200
        }
    },
    condutores: [
        {
            nome: "Junior"
        },
        {
            nome: "Ana"
        },
        {
            nome: "João"
        }
    ]
}

console.log(carro.condutores)