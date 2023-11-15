const knex = require('../config')
const create = (body) => {
  return knex
    .insert(body)
    .into('branch_office')
    .returning(['name', 'address'])
}

const findAll = () => {
  return knex
    .select('*')
    .from('branch_office')
}

const findOne = (branchId) => {
  return knex
    .select('*')
    .from('branch_office')
    .where('id_branch', branchId)
}

const update = (branchId, body) => {
  return knex
    .update(body)
    .table('branch_office')
    .where('id_branch', branchId)
    .returning(['*'])
}

const destroy = (branchId) => {
  return knex
    .del()
    .from('branch_office')
    .where('id_branch', branchId)
}


module.exports = {
  create,
  findAll,
  findOne,
  update,
  destroy
}

