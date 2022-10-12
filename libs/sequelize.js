const { Sequelize } = require('sequelize');

const { config } = require('./../config/config');
const setupModles = require('./../db/models/index');

const USER = encodeURIComponent(config.dbUser);
const PASSWORD = encodeURIComponent(config.dbPassword);
const URI = `mysql://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`;

const sequelize = new Sequelize(URI, {
  dialect: 'mysql',
  logging: true,
})

setupModles(sequelize);

module.exports = sequelize;
