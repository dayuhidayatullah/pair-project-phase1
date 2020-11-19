'use strict';
const fs = require('fs')
module.exports = {
  up: (queryInterface, Sequelize) => {
   let data = JSON.parse(fs.readFileSync('./admin.json', 'utf-8'))

  data.forEach(e => {
    e.createdAt = new Date()
    e.updatedAt = new Date()
  });

      return queryInterface.bulkInsert('Administrations', data, {})
  },

  down: (queryInterface, Sequelize) => {

    return queryInterface.bulkDelete('Administrations', data)
  }
};
