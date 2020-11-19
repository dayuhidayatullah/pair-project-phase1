'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('Complaints', 'AdministrationId', {
      type: Sequelize.INTEGER,
      references: {
        model: "Administrations",
        key: "id"
      },
      onDelete: "CASCADE",
      onUpdate: "CASCADE"
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('Complaints', 'AdministrationId')
  }
};
