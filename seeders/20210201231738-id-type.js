'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('IdTypes', [{
      idType: 'CC',
      description: 'Cédula de ciudadanía',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      idType: 'TI',
      description: 'Tarjeta de Identidad',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      idType: 'PP',
      description: 'Pasaporte',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      idType: 'CE',
      description: 'Cédula de extranjería',
      createdAt: new Date(),
      updatedAt: new Date()
    } 
  ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('IdTypes', null, {});
  }
};

