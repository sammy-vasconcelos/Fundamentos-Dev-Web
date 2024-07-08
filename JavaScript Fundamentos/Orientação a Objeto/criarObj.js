// Primeira forma:______________________________________________________________________________________________________________________________
// notação literal
const obj1 = {}

// Segunda forma:______________________________________________________________________________________________________________________________
// Object em JS
const obj2 = new Object

// Terceira forma:______________________________________________________________________________________________________________________________
// Funções construtoras
function Produto(nome, preco, marca){
    this.nome = nome // isso faz com que o nome possa ser acessado, ou seja, se torna publico
    // preco e marca vão ser privados, não podendo ser alterados
}

//Quarta forma:________________________________________________________________________________________________________________________________
// Function Factory
function criarFuncionario(nome, idade, cargo, salario, faltas){
    return {
        nome,
        idade,
        cargo,
        salario, 
        faltas,
        getSalario(){
            return salario - faltas
        }
    }
}

//Quinta forma:________________________________________________________________________________________________________________________________
// Object create
const filha = Object.create(null)
filha.nome = "Sammy"
console.log(filha)


//Sexta forma:________________________________________________________________________________________________________________________________
// Transformar de JSON para obj
const fromJson = JSON.parse('{"info": "olá"}')
console.log(fromJson.info)