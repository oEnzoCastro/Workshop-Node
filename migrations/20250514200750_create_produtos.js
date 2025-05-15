exports.up = function(knex) {
    return knex.schema.createTable('produtos', function(table) {
      table.increments('id').primary();         // ID auto-incremental
      table.string('descricao').notNullable();  // Descrição do produto
      table.string('marca').notNullable();      // Marca do produto
      table.decimal('valor', 10, 2).notNullable(); // Valor com duas casas decimais
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable('produtos');
  };
  