//tagged templates - processa template dentro de uma função
function tag(partes, ...valores){
    console.log(partes);
    console.log(valores);
    return 'Outra String'
}

const aluno = 'Sammy'
const situacao = 'Aprovado'

console.log(tag `${aluno} está ${situacao}`);



function real(partes, ...valores){
    const resultado = []
    valores.forEach((valor, indice) => {
        valor = isNaN(valor) ? valor : `R$${valor.toFixed(2)}`
        resultado.push(partes[indice], valor)
    })
    return resultado.join('')
}

const preco = 29
const precoParcela = 10
console.log(real `2x de ${preco} ou 1 de ${precoParcela}`);