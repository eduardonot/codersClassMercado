var produtos = require('./Produtos')
module.exports = class Compras{
    constructor(getProduto = new produtos()){
        this.getProduto = getProduto
    }
    exibir(){
        return this.getProduto.listarEstoque()
    }
    checarCarrinho(){

    }
    comprar(){
        
    }
}