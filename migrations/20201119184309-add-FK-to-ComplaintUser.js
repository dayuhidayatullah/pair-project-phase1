'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addConstraint('ComplaintUsers', {
      fields: ['ComplaintId'],
      type: 'foreign key',
      name: 'custom_fkey_constraint_ComplaintId',
      references: {
        table: 'Complaints',
        field: 'id'
      },
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE'
    })
    .then(() => {
      return queryInterface.addConstraint('ComplaintUsers', {
        fields: ['UserId'],
        type: 'foreign key',
        name: 'custom_fkey_constraint_UserId',
        references: { //Required field
          table: 'Users',
          field: 'id'
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      })
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeConstraint('ComplaintUsers', 'custom_fkey_constraint_ComplaintId',{})
    .then(() => {
      return queryInterface.removeConstraint('ComplaintUsers', 'custom_fkey_constraint_UserId',{})
    })
  }
};
