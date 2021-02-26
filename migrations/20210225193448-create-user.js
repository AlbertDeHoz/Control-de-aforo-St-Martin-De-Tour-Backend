'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      idNumber: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      idType: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      firstName: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      lastName: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      phone: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      age: {
        type: Sequelize.INTEGER
      },
      birth: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      address: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      EpsName: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      schedule: {
        type: Sequelize.STRING
      },
      enable: {
        type: Sequelize.BOOLEAN
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Users');
  }
};