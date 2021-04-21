module.exports = class Produtos{
    constructor(){
        this.listaProdutos = {}
        this.listaEstoque = []
    }
    cadastrarProdutos(nome, quantidade, valor){
        this.listaProdutos = {nome:nome,quantidade:quantidade,valor:valor}
        this.listaEstoque.push(this.listaProdutos)
        return this.listaEstoque
    }
    listarEstoque(){
        return this.listaEstoque.filter(estoque => estoque.quantidade > 0)
    }
    listarEstoqueVazio(){
        return this.listaEstoque.filter(estoque => estoque.quantidade == 0)
    }
}