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
    ComplaintId: DataTypes.STRING,
    UserId: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'ComplaintUser',
  });
  return ComplaintUser;
};