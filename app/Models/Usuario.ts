import { BaseModel, column, hasMany, HasMany} from '@ioc:Adonis/Lucid/Orm'
import Produto from 'App/Models/Produto'
export default class Usuario extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public nome: string

  @column()
  public senha: number

  @hasMany (()=> Produto)
  public produto: HasMany <typeof Produto>
 }
