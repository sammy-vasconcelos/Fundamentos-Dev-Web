// é uma função dentro de uma função, que dado certo evento, vai ser chamada de volta
// pode ser chamada várias vezes ou apenas uma, depende do contexto

const fabricantes = ["Mercedez", "BMW", "Ford"];

function imprimir(nome, indice){
    console.log(`${indice + 1}. ${nome}`)
}

fabricantes.forEach(imprimir)

// Diferenças entre uso de callback e sem uso de callback:_______________________________________

//sem callck:
const notas = [8.0,5.5, 6.6,7.7, 7.0, 9.0, 10.0, 4.6,8.9]
let notasBaixas = []
for(let i in notas){
    if(notas[i] < 7){
        notasBaixas.push(notas[i])
    }
}

console.log(notasBaixas)

// com callback:
let notasBaixas2 = notas.filter(nota => nota < 7)

console.log(notasBaixas2)