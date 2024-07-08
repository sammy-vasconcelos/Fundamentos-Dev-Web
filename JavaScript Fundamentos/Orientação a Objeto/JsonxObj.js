// O JSON é um formato de dados (o mais usado para interoperabilidade)
// O JSON serve para comunicar sistemas com tecnologias diferentes 
// pois é um formato textual super simples

const obj = { a: 1, b: 2, c: 3, soma(){return a + b + c}}
console.log(JSON.stringify(obj))  // Obj => JSON
// não retorna função

console.log(JSON.parse('{"a": 1, "b": 2, "c": 3}'))  // JSON => Obj
// todo atributo deve ter aspas duplas, se não é um formato inválido