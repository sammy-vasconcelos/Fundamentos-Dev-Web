// São funções que retornam objetos 
// é um padrão de projeto
// Utilizada pra automatizar criação de objetos sem precisar reescrever código :)
// Exemplo:

function criarPessoa(){
    return{
        nome: "Sammy", 
        idade: 20
    }
}

function criarProduto(nome, preco){
    return {
        nome, // ou nome: nome
        preco
    }
}


console.log(criarProduto("Arroz", 30))