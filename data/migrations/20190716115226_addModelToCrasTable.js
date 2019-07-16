
exports.up = function(knex) {
    return knex.schema.alterTable('cars', table =>{
         table.text('Model')
     })
   };
   
   exports.down = function(knex) {
       return knex.schema.alterTable('cars', table =>{
           table.dropColumn('Model');
         });
   };
