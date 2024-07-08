// não aceita chaves duplicadas

const tecnologias = new Map()
tecnologias.set('react', {framework: false})
tecnologias.set('angular0', {framework: true})

console.log(tecnologias.react);
console.log(tecnologias.get('react'));

const chavesVariadas = new Map([
    [function () {}, 'Função'],
    [{}, 'Obj'],
    [123,'AAAAA']
])

chavesVariadas.forEach((valor, chave) => {
    console.log(chave, valor);
})

//função que diz se um elemento está contido no MAP
console.log(chavesVariadas.has(123));
chavesVariadas.delete(123)