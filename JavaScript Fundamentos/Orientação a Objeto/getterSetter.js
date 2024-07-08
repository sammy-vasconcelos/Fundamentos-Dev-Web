const sequencia = {
    _valor: 1,  // o underline é uma convenção para os devs de que a variavel é pretendida ser acessada apenas internamente
    get valor(){ return this._valor++},
    set valor(valor){
        if(valor > this._valor){
            this._valor = valor
        }
    }
}