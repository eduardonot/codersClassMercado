module.exports = class Usuario{
    constructor(){
        this.userList = []
        this.user = {}
        this.logCompras = []
    }
    cadastrarUsuario(nome, email, dinheiro){
        this.user = {nome:nome, email:email, dinheiro:dinheiro}
        this.userList.push(this.user)
        return this.userList
    }
    usuariosCadastrados(){
        return this.userList
    }
    checarCompras(){

    }
}