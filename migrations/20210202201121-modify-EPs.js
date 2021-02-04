'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return Promise.all([
        queryInterface.renameColumn('EPs', 'name', 'epsName'),
        queryInterface.addColumn(
          'EPs', // table name
          'codigo', // new field name
          {
            type: Sequelize.STRING,
            allowNull: false,
          },
        ),
        queryInterface.addColumn(
          'EPs',
          'NIT',
          {
            type: Sequelize.STRING,
            allowNull: false,
          },
        ),
        queryInterface.addColumn(
          'EPs',
          'Administradora',
          {
            type: Sequelize.STRING,
            allowNull: false,
          },
        ),
        queryInterface.addColumn(
          'Users',
          'EpsName',
          {
            type: Sequelize.STRING,
            allowNull: false,
          },
        )
      ])
  
  },

  down: (queryInterface, Sequelize) => {
    return Promise.all([
        queryInterface.renameColumn('EPs', 'epsName', 'name'),
        queryInterface.removeColumn(
          'EPs', // table name
          'codigo', // new field name
          {
            type: Sequelize.STRING,
            allowNull: false,
          },
        ),
        queryInterface.removeColumn(
          'EPs',
          'NIT',
          {
            type: Sequelize.STRING,
            allowNull: false,
          },
        ),
        queryInterface.removeColumn(
          'EPs',
          'Administradora',
          {
            type: Sequelize.STRING,
            allowNull: false,
          },
        ),
        queryInterface.removeColumn(
          'Users',
          'EpsName',
          {
            type: Sequelize.STRING,
            allowNull: false,
          },
        )
      ])
  
  },
};


//Código,Nit,Administradora,Nombre - Aportes en Línea