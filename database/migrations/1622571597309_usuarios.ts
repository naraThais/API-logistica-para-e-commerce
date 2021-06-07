import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Usuarios extends BaseSchema {
  protected tableName = 'usuarios'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').notNullable
      table.string('nome').notNullable
      table.float('senha').notNullable
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
