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

//A função await só vai funcionar dentro de uma função async
let obterAlunos = async () =>{
    const turmaA = await getTurma('A')
    const turmaB = await getTurma('B')
    return [].concat(turmaA,turmaB)
} // retorna um objeto AsyncFunction

obterAlunos().then(alunos => alunos.map(a => a.nome))

