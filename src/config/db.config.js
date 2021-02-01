
const { Sequelize } = require('sequelize');
require('dotenv').config();
const mysql2 = require('mysql2');

const sequelize = new Sequelize(process.env.DB_DATABASE, process.env.DB_USER, process.env.DB_PASSWORD, {
    dialectModule: mysql2,
    host: process.env.DB_HOST,
    dialect:'mysql',
    dialectModule: mysql2
});


sequelize
     .authenticate()
     .then(function() {
       console.log('Connection has been established successfully.');
     })
     .catch(function (err) {
       console.log('Unable to connect to the database:', err);
     });

export default sequelize;