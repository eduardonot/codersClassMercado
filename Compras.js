var produtos = require('./Produtos')
var usuario = require("./Usuario")

module.exports = class Compras{
    constructor(getProduto = produtos(), getUsuario = usuario()){
        this.getProduto = getProduto
        this.getUsuario = getUsuario
        this.item = {}
        this.itensCheckout = []
        this.comprador
        this.agregador
    }

    adicionarCarrinho(comprador, nome, quantidade){
        let indexPosition
        this.comprador = this.getUsuario.usuariosCadastrados().find(x => x.nome == comprador)
        this.item = this.getProduto.listarEstoque().find(x => x.nome == nome)
        this.agregador = {
            comprador: this.comprador.nome,
            nome: this.item.nome,
            quantidade:quantidade,
            valor:this.item.valor*quantidade
        }
        if(quantidade > this.item.quantidade){
            return
        }
        // CHECA DUPLICATAS
        for(var i = 0; i < this.itensCheckout.length; i++){
            for(let names of this.itensCheckout){
                indexPosition = this.itensCheckout.indexOf(names)
                if(names.comprador == comprador && names.nome == nome && indexPosition != i){
                    this.itensCheckout.pop()
                }
            }
        }
        this.itensCheckout.push(this.agregador)
        return this.itensCheckout
    }

    checarCarrinho(user){
        var userCart = []
        for(let cart of this.itensCheckout){
            if(cart.comprador == user){
                userCart.push(cart)
            }
        }
        return userCart
    }
    comprar(user){
        let valorCompra = 0 
        let usuario = this.getUsuario.usuariosCadastrados().find(x => x.nome == user)
        for(let cart of this.checarCarrinho(user)){
            valorCompra += cart.valor
        }
        if (valorCompra > usuario.dinheiro){
            return "Você não tem saldo suficiente para esta compra."
        }
        usuario.dinheiro - valorCompra
        return  usuario
    }
}