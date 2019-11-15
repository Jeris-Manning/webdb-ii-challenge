
exports.seed = function(knex,Promise) {
  // Deletes ALL existing entries
  return knex('cars').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('cars').insert([
        {vin: 'IFJVOGHE60OJKGJEL', make: 'Pontiac', model: 'Grand Prix', mileage: 24557},
        {vin:'65MTBXBBDVOIHF5EU', make: 'Datsun', model: 'Plague Bringer', mileage: 2422557},
        {vin:'SM4X9DH3RA422JF7K', make: 'Tesla', model: 'Space Horse', mileage: 88745}
      ]);
    });
};
