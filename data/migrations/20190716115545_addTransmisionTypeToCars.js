

exports.up = function(knex) {
    return knex.schema.alterTable('cars', table =>{
         table.text('TransmisionTypes')
     })
   };
   
   exports.down = function(knex) {
       return knex.schema.alterTable('cars', table =>{
           table.dropColumn('TransmisionTypes');
         });
   };