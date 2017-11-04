'use strict';
console.log(process.env.NODE_ENV);
const environment = process.env.NODE_ENV || 'development';
const knexConfig = require('./knexfile')[environment];
const knex = require('knex')(knexConfig);

// module.exports = knex;
// module.exports = example;
module.exports ={
    knex:knex,

};
