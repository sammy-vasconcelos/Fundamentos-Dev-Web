function Carro(delta = 5, vMax = 200){
    // atributo privado:
    let velocidadeAtual = 0

    // atributo público:
    this.aceleracao = function () {
        if(velocidadeAtual + delta <= vMax){
            velocidadeAtual += delta
        } else {
            velocidadeAtual = vMax
        }
    }

    // método publico:
    this.getVelocidadeAtual = () => velocidadeAtual
}

const uno = new Carro
uno.aceleracao()
console.log(uno.getVelocidadeAtual())

const ferrari = new Carro(20, 350)
ferrari.aceleracao()
console.log(ferrari.getVelocidadeAtual())