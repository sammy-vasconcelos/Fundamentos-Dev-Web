// operador ... rest(juntar)/spread(espalhar)
//usar rest como parametro de função

//usar spread como objeto
const funcionario = { nome:"Maria", salario: 1212}
const clone = {ativo: true, ...funcionario}

// usar spread com array
const grupoA = ['A', 'B', 'C']
const grupoFinal = ["D", ...grupoA]
console.log(grupoFinal);