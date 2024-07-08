// Estrutura que não aceita repetição e não é indexado

const times = new Set()
times.add('Vasco')

console.log(times);


const nomes = ['Sammy', 'Ana', 'Julia', 'Ana']
const nomesSet = new Set(nomes)

console.log(nomesSet);