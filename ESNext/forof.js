// For of opera com valores e não em cima de indice

for (let letra of "Coder"){
    console.log(letra); // retorna cada letra da string
}

const assuntosEcma = ['set', 'map', 'promise']

for (let i in assuntosEcma){
    console.log(i);
}

for (let assunto of assuntosEcma){
    console.log(assunto);
}

const assuntosMap = new Map([
    ['Map', {abordado: true}],
    ['Set', {abordado: true}],
    ['Promise', {abordado: false}],
])

for (let assunto of assuntosMap){
    console.log(assunto); // retorna todo o map, com chaves e tudo
}

for (let chave of assuntosMap.keys()){
    console.log(chave);
}

for (let valor of assuntosMap.values()){
    console.log(valor);
}

for (let [chave, valor] of assuntosMap.entries()){
    console.log(chave,valor);
}