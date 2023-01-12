const Sequelize = require('sequelize');
const sequelize = require('../database/database.connect.js')

const auth = sequelize.define('auth',{
    id:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    firstName:{
        type: Sequelize.STRING(255),
        allowNull: false
    },
    lastName:{
        type: Sequelize.STRING(255),
        allowNull: false
    },
    username:{
        type: Sequelize.STRING(255),
        allowNull: false
    },
    password:{
        type: Sequelize.STRING(255),
        allowNull: false
    },
    role:{
        type: Sequelize.STRING(50),
        allowNull: false
    }
},
{
    freezeTableName: true
  });
module.exports = auth;