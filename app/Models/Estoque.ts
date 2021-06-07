import { BaseModel, column, belongsTo, BelongsTo} from '@ioc:Adonis/Lucid/Orm'
import Produto from 'App/Models/Produto'

export default class Estoque extends BaseModel {
  @column({isPrimary: true, columnName: 'id'})
  public id: number
  @column()
  public nome: string
  @column()
  public produto_id: number
  @column()
  public quantidade: number

  @belongsTo (() => Produto, {localKey: 'idP', foreignKey: 'produto_id' })
  public produto: BelongsTo<typeof Produto> 
}
