const Sequelize = require('sequelize');
const sequelize = require('../database/database.connect.js')

const Test = sequelize.define('testing',{
    id:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    name:{
        type: Sequelize.STRING,
        allowNull: false
    },
    gender:{
        type: Sequelize.STRING,
        allowNull: false
    }

});

module.exports = Test;