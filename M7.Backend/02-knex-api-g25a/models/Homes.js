const knex = require('../config')
const create = (body) => {
  return knex
    .insert(body)
    .into('homes')
    .returning(['house_id', 'tile', 'description', 'guests', 'address', 'rental_price', 'fk_user', 'active', 'created_at'])
}

const findAll = () => {
  return knex
    .select('*')
    .from('homes')
    .where('active', true)
}

const findOne = (houseId) => {
  return knex
    .select('*')
    .from('homes')
    .where('house_id', houseId)
    .where('active', true)
}

const update = (houseId, body) => {
  return knex
    .update(body)
    .table('homes')
    .where('house_id', houseId)
    .returning(['*'])
}

const destroy = (houseId) => {
  return knex
    .del()
    .from('homes')
    .where('house_id', houseId)
}

const softDelete = (houseId) => {
  return knex
    .update({ active: false })
    .from('homes')
    .where('house_id', houseId)
}

module.exports = {
  create,
  findAll,
  findOne,
  update,
  destroy,
  softDelete
}
