var produtos = require('./Produtos')
var usuario = require("./Usuario")

module.exports = class Compras{
    constructor(getProduto = new produtos(), getUsuario = new usuario()){
        this.getProduto = getProduto
        this.getUsuario = getUsuario
        this.item = {}
        this.itensCheckout = []
        this.agregador
    }

    adicionarCarrinho(nome, quantidade){
        let indexPosition
        this.item = this.getProduto.listarEstoque().find(x => x.nome == nome)
        this.agregador = {
            nome: this.item.nome,
            quantidade:quantidade,
            valor:this.item.valor*quantidade
        }
        if(quantidade > this.item.quantidade){
            return
        }
        for(var i = 0; i < this.itensCheckout.length; i++){
            for(let names of this.itensCheckout){
                indexPosition = this.itensCheckout.indexOf(names)
            }
            if(indexPosition != i){
                this.itensCheckout.pop()
            }
        }
        this.itensCheckout.push(this.agregador)
    }

    checarCarrinho(){
        return this.itensCheckout
    }

    comprar(){ 
    }
}