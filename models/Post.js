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
      }, 
      // created_at: {
      //   type: DataTypes.TIME,
      //   allowNull: false        
      // }
      is_active: {
        type: DataTypes.VIRTUAL,
        default: true,
        // get() {
        //   currentTime = new Date()
        //   postTime = this.created_at
        //   var postHoursDifference = differenceInHours(currentTime, postTime)
        //   if (this.comments) {
        //     comments = this.comments
        //     lastComment = comments[comments.length - 1]
        //     lastCommentTime = lastComment.created_at;
        //     lastCommentHoursDifference = differenceInHours(currentTime, lastCommentTime)
        //   }
        //   if (postHoursDifference < 24) {
        //     return true //(post IS active)
        //   } else if (comments.length == 0) {
        //       return false //(post IS NOT active)
        //   } else if (lastCommentHoursDifference < 24) {
        //       return true
        //   } else return false
        // }
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