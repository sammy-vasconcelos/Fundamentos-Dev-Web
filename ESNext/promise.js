// É usada para um processo assíncrono
// Pode ser atendido ou pode ser rejeitado

function falarDepoisDe(segundos,frase){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(segundos > 3) reject(frase)
            resolve(frase) // a promise só aceita um parametro, para passar mais conteúdos é necessário um obj
        }, segundos * 1000)
    }) // o resolve é uma função que vai ser chamada quando a promessa for atendida, o reject é quando a promessa é rejeitada
}

falarDepoisDe(4, "oiiiii")
    .then(frase => frase.concat(' AKKAKAKK')) // a função then é chamada quando a promise é resolvida
    .then(outraFrase => console.log(outraFrase)) // sempre que um then termina o resultado vai passando de um pro outro
    .catch(error => console.log(error)) // trata o erro na promise