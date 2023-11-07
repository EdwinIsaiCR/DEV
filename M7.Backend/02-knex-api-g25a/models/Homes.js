const knex = require('../config')
const create = (body) => {
  return knex
    .insert(body)
    .into('homes')
    .returning(['house_id', 'tile', 'description', 'guests', 'address', 'rental_price', 'fk_user', 'active', 'created_at'])
}

module.exports = {
  create
}
