

exports.up = function(knex) {
    return knex.schema.alterTable('cars', table =>{
         table.text('Make')
     })
   };
   
   exports.down = function(knex) {
       return knex.schema.alterTable('cars', table =>{
           table.dropColumn('Make');
         });
   };
