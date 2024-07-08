// VAR 
// var são acessíveis dentro de qualquer bloco de código (exceto funções)
{{{ var acesso = "SIM!"}}}
console.log(acesso)

// Dependendo do escopo, é reescrito:
var numero = 1
{
    var numero = 3
    console.log(`dentro = ${numero}`)
}
console.log(`Fora = ${numero}`)