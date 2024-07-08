const valor = 'Global'

function minhaFunc(){
    console.log(valor)
}

function exec(){
    const valor = "Local"
    minhaFunc()
}

exec()
// a função funciona de acordo com o contexto em que ela foi escrita