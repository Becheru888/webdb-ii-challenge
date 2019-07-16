exports.up = function(knex) {
    return knex.schema.alterTable('cars', table =>{
         table.text('TransmisionStatus')
     })
   };
   
   exports.down = function(knex) {
       return knex.schema.alterTable('cars', table =>{
           table.dropColumn('TransmisionStatus');
         });
   };
