var produtos = require('./Produtos')
var usuario = require('./Usuario')
var compras = require('./Compras')
const userAdd = new usuario()
const produtoAdd = new produtos()
const comprar = new compras(produtoAdd, userAdd)
// ADICIONAR DEZ PRODUTOS
produtoAdd.cadastrarProdutos('mouse',5, 15.0)
produtoAdd.cadastrarProdutos('teclado',5, 20.0)
produtoAdd.cadastrarProdutos('monitor',1, 420.0)
produtoAdd.cadastrarProdutos('gabinete',2, 330.0)
produtoAdd.cadastrarProdutos('impressora',1, 500.0)
produtoAdd.cadastrarProdutos('roteador',3, 120.5)
produtoAdd.cadastrarProdutos('hub',0, 85.0)
produtoAdd.cadastrarProdutos('switch',0, 300.0)
produtoAdd.cadastrarProdutos('cooler',0, 40.0)
produtoAdd.cadastrarProdutos('pen drive',50, 30.0)
// LISTAR ESTOQUE E AUSENTES
console.log(produtoAdd.listarEstoque())
console.log(produtoAdd.listarEstoqueVazio())
// ADICIONAR DOIS USUARIOS
userAdd.cadastrarUsuario('Eduardo','eduardo_not@hotmail.com',500)
userAdd.cadastrarUsuario('Thiago','thiagolancer@gmail.com',4500)
// ADICIONAR ITENS AO CARRINHO
comprar.adicionarCarrinho("Eduardo","mouse", 5)
comprar.adicionarCarrinho("Eduardo","gabinete", 1)
comprar.adicionarCarrinho("Eduardo","teclado", 3)
comprar.adicionarCarrinho("Thiago","mouse", 5)
comprar.adicionarCarrinho("Thiago","teclado", 4)
comprar.adicionarCarrinho("Thiago","teclado", 4)
comprar.adicionarCarrinho("Thiago","gabinete", 1)
// CHECAR CARRINHO
console.log(comprar.checarCarrinho("Eduardo"))
console.log(comprar.checarCarrinho("Thiago"))
// COMPRAR
console.log(comprar.comprar("Eduardo"))
// MOSTRAR USUARIOS
console.log(userAdd.usuariosCadastrados())
// MOSTRAR ESTOQUE ATUALIZADO
console.log(produtoAdd.listarEstoque())