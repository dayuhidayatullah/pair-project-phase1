'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Administration extends Model {
    static associate(models) {
      Administration.hasMany(models.Complaint)
    }
  };
  Administration.init({
    complaintLocation: DataTypes.STRING,
    address: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Administration',
  });
  return Administration;
};