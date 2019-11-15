exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {id: 1, colName: 'joke1'},
        {id: 2, colName: 'joke2'},
        {id: 3, colName: 'joke3'}
      ]);
    });
};

