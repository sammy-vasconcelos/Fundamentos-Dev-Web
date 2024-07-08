const pilotos = ["João", "Leo", "Ana", "Bea"]

//removers ultimo elemento do array
pilotos.pop() 
//_________________________________________________________________________________________________________________________________________________


// adiciona um novo elemento na ultima posição:
pilotos.push("CCCCC") 
//_________________________________________________________________________________________________________________________________________________


// remove o primeiro elemento da lista:
pilotos.shift() 
//_________________________________________________________________________________________________________________________________________________


// adiciona na primeira posição:
pilotos.unshift("BBBB") 
//_________________________________________________________________________________________________________________________________________________


//Serve para adicionar e remover 
// Adicionando:
pilotos.splice(2, 0, "Camila", "Sammy") //primeiro número é posição em que vai ser add, segundo é indice seria removido e as strings são os novos elemntos 
//Removendo 
pilotos.splice(3, 1)  // no indice 3 vai ser removido 1 elemento
//_________________________________________________________________________________________________________________________________________________


// Retorna um novo array, no exemplo a partir do indice 2:
pilotos.slice(2) 
// Vai do elemento do indice 1 até o indice antes do segundo indice, ou seja, até o 3:
pilotos.slice(1, 4) 
//_________________________________________________________________________________________________________________________________________________

 
