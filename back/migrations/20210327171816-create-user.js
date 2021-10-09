'use strict';

const { DataTypes } = require("sequelize");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn(
      'Users',
      'username',
      Sequelize.STRING,
      {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: 'default'
      }
    )
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Users')
  }
};
