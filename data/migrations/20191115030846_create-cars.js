
exports.up = function(knex) {
  return knex.schema.createTable('cars', tbl => {
    // creates a primary key called id
    tbl.increments();
    // creates a text field called name which is both required and unique
    tbl.text('vin', 128).unique().notNullable();
    // creates a numeric field called budget which is required
    tbl.text('make').notNullable();
    tbl.text('model').notNullable();
    tbl.integer('mileage').notNullable();
    tbl.text('transmission');
    tbl.text('title');
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('cars');
};
