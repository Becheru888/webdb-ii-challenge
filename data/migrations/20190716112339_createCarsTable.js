
exports.up = function(knex) {
  return knex.schema.createTable('cars', table =>{
      table.increments();
  })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('cars');
};
