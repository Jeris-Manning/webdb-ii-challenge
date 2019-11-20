const db = require('./dbConfig.js');

module.exports = {
  get,
  getById,
  add,
  // update,
  remove
};

function get() {
  return db('cars');
}

function getById(id) {
  return db('cars')
    .where({ id: Number(id) })
    .first();
}

// function add(car) {
//   return db('cars')
//     .insert(car)
//     .then((ids) => ({ ...car, id: ids[0] }));
// }

function add(car) {
 return db('cars').insert(car)
  .then(ids => {
    return getById(ids[0]);
  });
}

// function update(id, post) {
//   return db('posts')
//     .where('id', Number(id))
//     .update(post);
// }

function remove(id) {
  return db('cars')
    .where({id: Number(id)})
    .del();
}