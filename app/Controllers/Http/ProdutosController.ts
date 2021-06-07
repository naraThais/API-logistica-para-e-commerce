import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Produto from 'App/Models/Produto'

export default class ProdutosController {
  public async index ({}: HttpContextContract) {
    const produto = await Produto.all()
    return produto
  }
  public async store ({request}: HttpContextContract) {
  const data = request.only (['nome', 'quantidade', 'usuario_id'])
  const produto =await Produto.create(data)
    return produto
}
  public async show ({params}: HttpContextContract) {
    console.log(params)
    const produto = await Produto.query().where('idP', params.id).preload('usuario')
    return produto
  }
  public async update ({request, params}: HttpContextContract) {
    const produto = await Produto.findOrFail(params.idP)
    const data = request.only (['nome', 'quantidade', 'usuario_id'])

    produto.merge(data)

    await produto

    return produto

  }
  public async destroy ({params}: HttpContextContract) {
  const produto = await Produto.findOrFail(params.idP)
  await produto.delete()
  }
}
