// JS tem uma herança baseda em prototipos
// um obj em js ele tem uma referencia para seu prototipo

//Cadeia de protótipos:___________________________________________________________________________________________________________________
const avo = { attr: 'A' }
const pai = { __proto__: avo, attr2: 'B', attr4: '123'}
const filho = {__proto__:pai, attr3: 'C', attr4: 'D'}
// vai percorrer toda a herança até achar o attr 1
console.log(filho.attr)
// se já existe um attr4 no filho, não tem necessidade de ele procurar em outro parente
console.log(filho.attr4)



const carro = {
    vAtual: 0,
    vMax: 200,
    acelerarMais(delta){
        if(this.vAtual + delta < this.vMax){
            this.vAtual += delta
        } else {
            this.vAtual = this.vMax
        }
    },
    status(){
        return `${this.vAtual}Km/h de ${this.vMax}`
    }
}

const ferrari = {
    modelo: 'F40',
    vMax: 240,        //Shadowing: vai priorizar a vMax escrita nesse obj, então se tiver escrito no obj pai, vai ser usado a do filho
    status(){
        return `${this.modelo}: ${super.status()}`
    }
}

const volvo = {
    modelo: 'V40',
    vMax: 200,
    status(){
        return `${this.modelo}: ${super.status()}`
    }
}

Object.setPrototypeOf(ferrari, carro)
Object.setPrototypeOf(volvo, carro)

ferrari.acelerarMais(300)
volvo.acelerarMais(150)

console.log(volvo.status())
console.log(ferrari.status())

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const pai2 = {
    nome: "João",
    corCabelo: "preto"
}

const filha = Object.create(pai2)
filha.nome = "Ana"
console.log(filha.corCabelo)

const filha2 = Object.create(pai2, {
    nome: {value: "Bia", writable: false, enumerable: true}  // writable: se permite ou não ser mudado, enumerable: se pode ou não ser listado
})

console.log(`${filha2.nome} tem cabelo ${filha2.corCabelo}`)

for(let key in filha2){
    filha2.hasOwnProperty(key) ?
    console.log(key) : console.log("por herança: " + key)
}