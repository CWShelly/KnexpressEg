
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
    return knex('sample').del()
    .then(function () {
      // Inserts seed entries
        return knex('sample').insert([
            {name:'test', email:'test@test.com'},
            {name:'testB', email:'testB@test.com'}

        ]);

    });
};
