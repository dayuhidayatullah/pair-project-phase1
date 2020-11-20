'use strict';
const {hashPassword} = require('../helpers/password')

const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    getFullName(){
      return `${this.firstName} ${this.lastName}`
    }
    static associate(models) {
      User.belongsToMany(models.Complaint, {through: models.ComplaintUser})
    }
  };
  User.init({
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    userName: DataTypes.STRING,
    gmail: DataTypes.STRING,
    password: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
    hooks: {
      beforeCreate: (instance, options) => {
        if(instance.lastName == '') instance.lastName = instance.firstName
        if(instance.firstName == '') instance.firstName = instance.lastName
        if(instance.password.length > 0) instance.password = hashPassword(instance.password)
      }
    }
  });
  return User;
};