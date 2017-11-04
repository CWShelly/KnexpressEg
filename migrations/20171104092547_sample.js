'use strict';

exports.up = function(knex) {
    return knex.schema.createTable('sample', (table)=>{
        table.increments();
        table.string('name').notNullable();
        table.string('email').notNullable().unique();
        table.timestamps(true, true);
    });

};

exports.down = function(knex) {
    return knex.schema.dropTable('sample');
};
