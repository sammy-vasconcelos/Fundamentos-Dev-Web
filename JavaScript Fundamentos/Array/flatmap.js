const escola = [{
    nome: "turma 1",
    alunos: [{
        nome: "Sammy",
        nota: 10.0
    },{
        nome: "Gus",
        nota: 7.0
    }],
},{
    nome: "turma 2",
    alunos: [{
        nome: "Rebeca",
        nota: 8.0
    },{
        nome: "Carlos",
        nota: 5.0
    }]
}]


//  O objetivo é: pegar as notas independente das turmas
const getNotaAlunos = a => a.nota
const getNotaTumar = turma => turma.alunos.map(getNotaAlunos)

const notas1 = escola.map(getNotaTumar)
console.log(notas1)
//retorna: [ [ 10, 7 ], [ 8, 5 ] ]

Array.prototype.flatMap = function(callback){
    return Array.prototype.concat.apply([], this.map(callback))
}

const notas2 = escola.flatMap(getNotaTumar)
console.log(notas2)
//retorna: [ 10, 7, 8, 5 ]