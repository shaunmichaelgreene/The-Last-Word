const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
var differenceInHours = require('date-fns/differenceInHours')

class Post extends Model {}

Post.init(
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      text: {
        type: DataTypes.STRING,
        allowNull: false
      },
      user_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'user',
          key: 'id'
        }
      }
      
    },
    {
      sequelize,
      freezeTableName: true,
      underscored: true,
      timestamps: true,
      modelName: 'post'
    }
  );
  
  module.exports = Post;