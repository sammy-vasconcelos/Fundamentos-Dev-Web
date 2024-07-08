function MeuObj(){}
console.log(MeuObj.prototype)

const obj1 = new MeuObj
const obj2 = new MeuObj
console.log(obj1.__proto__ === obj2.__proto__)
//Objetos criados a partir de uma mesma função tem seus prototipos iguais
console.log(MeuObj.prototype === obj1.__proto__)
//O prototipo vai apontar para a função 

MeuObj.prototype.nome = "Anônimo"

const obj3 = {}
obj3.__proto__ = MeuObj.prototype



// Mexendo com prototype de funções_____________________________________________________________________________

String.prototype.reverse = function(){
    return this.split('').reverse().join('')
}

console.log("Olá :D".reverse())

Array.prototype.first = function(){
    return this[0]
}

console.log([1,2,3].first())


// Evitando modificações nos OBJs: ____________________________________________________________________________
const produto = Object.preventExtensions({       //não permite adicionar mais keys e values, mas ainda permite modificar os existentes e excluir
    nome: "AAAA", preco: 1.99, tag: "Promoção"
})


const pessoa = { nome: "Juliana", idade: 35 }  
Object.seal(pessoa)                             // não adiciona nem remove keys e values, mas o resto é normal
Object.freeze(pessoa)


