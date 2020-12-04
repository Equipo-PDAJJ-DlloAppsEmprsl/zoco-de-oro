import Sequelize from 'sequelize';

import dotenv from 'dotenv'

import mysql2 from 'mysql2'

dotenv.config()

const sequelize = new Sequelize(process.env.DB_DATABASE, process.env.DB_USER, process.env.DB_PASSWORD, {
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

export default  sequelize;