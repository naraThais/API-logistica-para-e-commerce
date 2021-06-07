
import Route from '@ioc:Adonis/Core/Route'
Route.get('/', async () => {
  return { hello: 'world' }
})

Route.resource('/produto', 'ProdutosController').apiOnly()
Route.resource('/usuario', 'UsuariosController').apiOnly()
Route.resource('/estoque', 'EstoquesController').apiOnly()