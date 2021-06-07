import { BaseModel, column, belongsTo, BelongsTo } from '@ioc:Adonis/Lucid/Orm'
import Usuario from 'App/Models/Usuario'

export default class Produto extends BaseModel {
  @column({isPrimary: true, columnName: 'idP'})
  public idP: number
  @column()
  public nome: string
  @column()
  public usuario_id: number
  @column()
  public quantidade: number

  @belongsTo (() => Usuario, {localKey: 'id', foreignKey: 'usuario_id' })
  public usuario: BelongsTo<typeof Usuario> 
}
