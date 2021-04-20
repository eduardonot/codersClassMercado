var produtos = require('./Produtos')
var usuario = require("./Usuario")

module.exports = class Compras{
    constructor(getProduto = new produtos(), getUsuario = new usuario()){
        this.getProduto = getProduto
        this.getUsuario = getUsuario
        this.item = {}
        this.itensCheckout = []
    }

    adicionarCarrinho(nome, quantidade){
        this.item = this.getProduto.listarEstoque().find(x => x.nome == nome)
        this.item.quantidade = quantidade
        this.itensCheckout.push(this.item)
    }

    checarCarrinho(){
        
        return this.itensCheckout
    }

    comprar(){ 
    }
}