module.exports = class Usuario{
    constructor(dinheiroSubtraido = 0){
        this.userList = []
        this.user = {}
        this.logCompras = []
        this.dinheiro = dinheiroSubtraido
    }
    cadastrarUsuario(nome, email, dinheiro){
        this.user = {nome:nome, email:email, dinheiro:dinheiro - this.dinheiro}
        this.userList.push(this.user)
        return this.userList
    }
    usuariosCadastrados(){
        return this.userList
    }
    checarCompras(){

    }
}