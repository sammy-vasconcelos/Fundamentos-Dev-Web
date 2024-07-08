// Funções arrow são sempre anonimas, precisam ser armazenadas em variáveis
//Exemplo:
dobro = (a) => {
    return a * 2
}
//_______________________________________________________________________

dobro = a => a * 2 // retorno implícito

//_______________________________________________________________________

const ola = () => "olá"
// ou 
const ola2 = _ => "olá :)" // o underline recebe um único param mas pode ser ignorado

console.log(ola())
console.log(ola2())


// This e Arrow Function:
// a arrow function consegue deixar o this fixo
function pessoa(){
    this.idade = 0

    setInterval(() => {
        this.idade++
        console.log(this.idade)
    }, 1000)
}

new pessoa