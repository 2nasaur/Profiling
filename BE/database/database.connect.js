const Sequelize = require('sequelize');
//const test = require('../models/test.model')


const sequelize = new Sequelize('barangay_profiling', 'root', '', {
  dialect: 'mysql',
  host: 'localhost',
  timezone: '+08:00'
  //logging: false
 
});

//test.sync()

module.exports = sequelize;
