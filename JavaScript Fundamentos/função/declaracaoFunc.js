// Function Declaration:______________________________________________________________________________________________________________
// nesse tipo de função, o interpretad javascript calcula primeiro as funções e depois as demais linhas de código,
// ou seja, eu consigo chamar essa funçao antes da linha que ela foi escrita, ex:
console.log(declaration(2,4))
function declaration(x, y){
    return x + y
}


// Function Expression:______________________________________________________________________________________________________________
// nesse tipo de função, só é possivel chama-la depois que ela foi declarada
const expression = function (x, y){
    return x - y
}

console.log(expression(8,6))


// Named Function Expression:________________________________________________________________________________________________________
// nesse tipo de função, só é possivel chama-la depois que ela foi declarada
const mult = function mult(x, y){
   return x * y
}

console.log(mult(2,6))