// Usar concatenação dessa forma pode ser incoveniente:
nome = "Sammy";
concatenar = "Olá eu sou" + nome

//Então podemos usar  maravilha do template String :D 
frase = `
        Olá, me chamo
        ${nome}!
        ` 
console.log(frase)