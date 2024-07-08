class Pessoa {
    constructor(nome){
        this.nome = nome
    }

    falar(){
        console.log("Meu nome é " + this.nome)
    }
}

const p1 = new Pessoa("Sammy")
p1.falar()

// Transformando essa classe construtora em uma Factory:
function Pessoa2(nome){
    this.nome = nome
    this.falar = () => console.log("Meu nome na função é " + this.nome)
}

const p2 = new Pessoa2("Sammy")
p2.falar()