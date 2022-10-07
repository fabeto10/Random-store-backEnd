const boom = require('@hapi/boom');
const pool = require('../libs/postgres.pool')
class CategoryService {

  constructor(){
  }
  async create(data) {
    return data;
  }

  async find() {
    const query = 'SELECT * FROM task'
    const rta = await this.pool.query(query);
    return rta.pool;
  }

  async findOne(id) {
    return { id };
  }

  async update(id, changes) {
    return {
      id,
      changes,
    };
  }

  async delete(id) {
    return { id };
  }

}

module.exports = CategoryService;
