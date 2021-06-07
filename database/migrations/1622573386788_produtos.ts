import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Produtos extends BaseSchema {
  protected tableName = 'produtos'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('idP')
      table.string('nome')
      table.integer('quantidade')
      table.integer('usuario_id').unsigned().references('id').inTable('usuarios')
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
