import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Usuario from 'App/Models/Usuario'
export default class UsuariosController {
  public async index ({}: HttpContextContract) {
    const Usuarios = await Usuario.all()
    return Usuarios
  }
  public async store ({request}: HttpContextContract) {
    const data = request.only(['nome', 'senha',])
    const Usuarios = await Usuario.create(data)

    return Usuarios 
  }

  public async show ({params}: HttpContextContract) {
    const Usuarios = await Usuario.findOrFail(params.id)

    return Usuarios

  }
  public async update ({request, params}: HttpContextContract) {
    const Usuarios = await Usuario.findOrFail(params.id)
    const data = request.only(['nome', 'senha'])

    Usuarios.merge(data)
    await Usuarios.save()
    return Usuarios

  }

  public async destroy ({params}: HttpContextContract) {
    const Usuarios = await Usuario.findOrFail(params.id)

    await Usuarios.delete()
  }
}
