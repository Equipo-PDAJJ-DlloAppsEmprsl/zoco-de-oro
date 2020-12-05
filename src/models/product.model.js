const { Sequelize, DataTypes } = require('sequelize');
import sequelize from '../config/db.config';

const Product = sequelize.define('productos', {
      nombre: { type: DataTypes.STRING, allowNull: false },
      marca: { type: DataTypes.STRING, allowNull: false },
      ciudad: { type: DataTypes.JSON, allowNull: false },
      precio: { type: DataTypes.FLOAT, allowNull: false },
      seller: { type: DataTypes.JSON, allowNull: false },
      rating: { type: DataTypes.FLOAT },
      descripcion: { type: DataTypes.STRING, allowNull: false },
      thumbnail: { type: DataTypes.STRING, allowNull: false },
      fotos: { type: DataTypes.JSON, allowNull: false },
}, {
  tableName: 'productos'
});

export default Product;