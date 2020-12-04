const { Sequelize } = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(process.env.DB_DATABASE, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    dialect:'mysql',
});


sequelize
     .authenticate()
     .then(function() {
       console.log('Connection has been established successfully.');
     })
     .catch(function (err) {
       console.log('Unable to connect to the database:', err);
     });

module.exports = sequelize;