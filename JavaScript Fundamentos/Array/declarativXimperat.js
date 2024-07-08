const alunos = [ 
    {nome: "Maria", nota: 9.0},
    {nome: "Sammy", nota: 10.0}
]


// Imperativa: 
let total = 0
for(let i = 0; i < alunos.length; i++ ){
    total += alunos[i].nota
}


// Declarativa: 
const getNota = aluno => aluno.nota
const soma = (total, atual) => total + atual
const total2 = alunos.map(getNota).reduce(soma) / alunos.length
console.log(total2)