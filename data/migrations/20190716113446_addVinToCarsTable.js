
exports.up = function(knex) {
 return knex.schema.alterTable('cars', table =>{
      table.integer('VIN').unique()
  })
};

exports.down = function(knex) {
    return knex.schema.drop('cars', table =>{
        table.dropColumn('VIN');
      });
};
