module.exports = class Usuario{
    constructor(){
        this.userList = []
        this.user = {}
    }
    cadastrarUsuario(nome, email, dinheiro){
        this.user = {nome, email, dinheiro}
        this.userList.push(this.user)
        return this.userList
    }
    checarCompras(){

    }
}