function erroPersonalizado(erro){
    //Exemplos de throw:
    throw {
        message: "Erro interno",
        code: "Failure"
    }
    // throw "DEU ERROOOOOOOOOO"
    // thorw new Error("DEU ERROOOOOOO")
}

function imprimirGrito(objeto){
    try {
        console.log(objeto.name.toUpperCase() + "!!!!!")
    } catch (error) {
       return erroPersonalizado(error)
    }
}

const objeto = { name: "sammy" }
imprimirGrito(objeto)