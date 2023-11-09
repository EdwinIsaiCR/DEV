const knex = require('../config')
const create = (body) => {
  return knex
    .insert(body)
    .into('products')
    .returning(['id_product', 'name', 'description', 'price', 'sku'])
}

const findAll = () => {
  return knex
    .select('*')
    .from('products')
}

const findOne = (productId) => {
  return knex
    .select('*')
    .from('products')
    .where('id_product', productId)
}

const update = (productId, body) => {
  return knex
    .update(body)
    .table('products')
    .where('id_product', productId)
    .returning(['*'])
}

const destroy = (productId) => {
  return knex
    .del()
    .from('products')
    .where('id_product', productId)
}


module.exports = {
  create,
  findAll,
  findOne,
  update,
  destroy
}
