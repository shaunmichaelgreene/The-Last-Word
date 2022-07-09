const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

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
      }, 
      // created_at: {
      //   type: DataTypes.TIME,
      //   allowNull: false        
      // }
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