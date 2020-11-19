'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ComplaintUser extends Model {
    static associate(models) {
      ComplaintUser.belongsTo(models.Complaint)
      ComplaintUser.belongsTo(models.User)
    }
  };
  ComplaintUser.init({
    ComplaintId: DataTypes.INTEGER,
    UserId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'ComplaintUser',
  });
  return ComplaintUser;
};