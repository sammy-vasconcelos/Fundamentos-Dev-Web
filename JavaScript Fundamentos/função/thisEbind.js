// Bind e this:______________________________________________________________________________________________________________
const pessoa = {
    saudacao: "bom dia!",
    falar() {
        console.log(this.saudacao)
    }
}

//tentar armazenar a função em uma variável dessa forma vai criar outro contexto e o this não vai funcionar:
const falarSemBind = pessoa.falar
falarSemBind()

// para conseguir armazenar a função em uma variavel e ainda conseguir acessar usando this, se usa o bind
// e assim, o this vai sempre apontar pro objeto dentro do bind, independente do contexto
const falarSaudacao = pessoa.falar.bind(pessoa)
falarSaudacao()


// Bind e This 2: __________________________________________________________________________________________________
// esse exemplo não vai dar certo pois o this.idade do setInterval não está apontado para Pessoa, pois quem está disparando ele não é a propria Pessoa,
// é o temporizador
function pessoa1(){
    this.idade = 0

    setInterval(function(){
        this.idade++
        console.log(this.idade)
    }, 1000)
}

new pessoa1

// Exemplo 2:
function pessoa2(){
    this.idade = 0

    setInterval(function(){
        this.idade++
        console.log(this.idade)
    }.bind(this), 1000)
}

new pessoa2

// Ou 

function pessoa3(){
    this.idade = 0
    const self = this
    setInterval(function(){
        self.idade++
        console.log(self.idade)
    }, 1000)
}

new pessoa3