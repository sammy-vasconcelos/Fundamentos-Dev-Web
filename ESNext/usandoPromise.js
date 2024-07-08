// Exemplo com promise
const http = require('http');

const getTurma = letra => {
    const url = `http://localhost:3000${letra}`
    return new Promise((resolve, reject) => {
        http.get(url, res => {
            let resultado =''
    
            res.on('data', dados => {
                resultado += dados
            })
    
            res.on('end', () => {
                try {
                    resolve(JSON.parse(resultado))
                } catch (error) {
                    reject(error)
                }
            })
        })
    })
}

// método com promises
// evita aninhamentos de callbacks, os then só são executados quando todas as funções forem executadas 
Promise.all([getTurma('A'), getTurma('B'), getTurma('C')])
    .then(turmas => [].concat(...turmas))
    .then(alunos => alunos.map(aluno => aluno.nome))
    .then(nomes => console.log(nomes))