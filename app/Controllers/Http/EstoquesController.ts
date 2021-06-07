import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Estoque from 'App/Models/Estoque'
export default class EstoquesController {
    public async index ({}: HttpContextContract) {
        const estoque = await Estoque.all()
        return estoque
      }
      public async store ({request}: HttpContextContract) {
      const data = request.only (['nome', 'quantidade', 'produto_id'])
      const estoque =await Estoque.create(data)
        return estoque
    }
      public async show ({params}: HttpContextContract) {
        console.log(params)
        const estoque = await Estoque.query().where('id', params.idP).preload('produto')
        return estoque
      }
      public async update ({request, params}: HttpContextContract) {
        const estoque = await Estoque.findOrFail(params.id)
        const data = request.only (['nome', 'quantidade', 'produto_id'])
    
        estoque.merge(data)
    
        await estoque
    
        return estoque
    
      }
      public async destroy ({params}: HttpContextContract) {
      const estoque = await Estoque.findOrFail(params.id)
      await estoque.delete()
      }
    }

