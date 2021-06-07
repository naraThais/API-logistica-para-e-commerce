import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Estoques extends BaseSchema {
  protected tableName = 'estoques'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('nome')
      table.integer('quantidade')
      table.integer('produto_id').unsigned().references('idP').inTable('produtos')
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
