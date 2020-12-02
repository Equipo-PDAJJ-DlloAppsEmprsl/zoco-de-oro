const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/db.config');

const Product = sequelize.define('productos', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },
      nombre: { type: DataTypes.STRING, allowNull: false },
      marca: { type: DataTypes.STRING, allowNull: false },
      ciudad: { type: DataTypes.JSON, allowNull: false },
      precio: { type: DataTypes.FLOAT, allowNull: false },
      seller: { type: DataTypes.JSON, allowNull: false },
      rating: { type: DataTypes.FLOAT },
      descripcion: { type: DataTypes.STRING, allowNull: false },
      thumbnail: { type: DataTypes.STRING, allowNull: false },
      fotos: { type: DataTypes.JSON, allowNull: false },
});

module.exports = Product