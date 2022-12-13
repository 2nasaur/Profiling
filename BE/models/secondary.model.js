const Sequelize = require('sequelize');
const sequelize = require('../database/database.connect.js')

const secondary = sequelize.define('subProfile',{
    id:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    firstName:{
        type: Sequelize.STRING,
        allowNull: false
    },
    lastName:{
        type: Sequelize.STRING,
        allowNull: false
    },
    contact:{
        type: Sequelize.INTEGER ,
        allowNull: true
    },
    sex:{
        type: Sequelize.STRING,
        allowNull: false
    },
    civilStatus:{
        type: Sequelize.STRING,
        allowNull: false
    },
    soi:{
        type: Sequelize.STRING,
        allowNull: true
    },
    ea:{
        type: Sequelize.STRING,
        allowNull: true
    },
    mh:{
        type: Sequelize.STRING,
        allowNull: true
    },
    typeOfRelationship:{
        type: Sequelize.STRING,
        allowNull: true
    }

});

module.exports = secondary;