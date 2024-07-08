// Closure é o escopo criado quando uma função é declarada
// Esse tipo de escopo permite a função acessar e manipular variáveis externas á função

// Contexto Léxico em ação:

const x = "global"

function fora(){
    const x = "local"
    const dentro = () => console.log(x)
    return dentro
}

const minhaFunc = fora()
minhaFunc()