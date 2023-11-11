const knex = require('../config')
const create = (body) => {
  return knex
    .insert(body)
    .into('customers')
    .returning(['first_name', 'last_name', 'email', 'phone_number', 'address', 'postal_code', 'neighborhood', 'city'])
}

const findAll = () => {
  return knex
    .select('*')
    .from('customers')
}

const findOne = (customerId) => {
  return knex
    .select('*')
    .from('customers')
    .where('id_customer', customerId)
}

const update = (customerId, body) => {
  return knex
    .update(body)
    .table('customers')
    .where('id_customer', customerId)
    .returning(['*'])
}

const destroy = (customerId) => {
  return knex
    .del()
    .from('customers')
    .where('id_customer', customerId)
}


module.exports = {
  create,
  findAll,
  findOne,
  update,
  destroy
}

