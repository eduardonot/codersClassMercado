module.exports = class Usuario{
    constructor(dinheiroSubtraido = 0){
        this.userList = []
        this.user = {}
        this.logCompras = []
        this.dinheiro
    }
    cadastrarUsuario(nome, email, dinheiro){
        this.user = {nome:nome, email:email, dinheiro:dinheiro}
        this.userList.push(this.user)
        return this.userList
    }
    usuariosCadastrados(){
        return this.userList
    }
    checarCompras(usuario){
        return this.logCompras.filter(x => x.comprador == usuario)
    }
}