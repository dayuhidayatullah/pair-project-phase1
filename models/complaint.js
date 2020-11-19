'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Complaint extends Model {
    static associate(models) {
      Complaint.belongsTo(models.Administration, {foreignKey: 'AdministrationId'})
      Complaint.belongsToMany(models.User, {through: models.ComplaintUser})
    }
  };
  Complaint.init({
    complaint_description: DataTypes.STRING,
    date: DataTypes.DATE,
    AdministrationId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Complaint',
  });
  return Complaint;
};