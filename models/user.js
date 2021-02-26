'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.EPS, {foreignKey: 'EpsName', as: 'epsName', targetKey: 'EpsName'});
      this.belongsTo(models.IdType, {foreignKey: 'idType', targetKey: 'idType'});
    }
  };
  User.init({
    idNumber: DataTypes.STRING,
    //idType: DataTypes.STRING,
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    phone: DataTypes.STRING,
    age: DataTypes.INTEGER,
    birth: DataTypes.DATE,
    address: DataTypes.STRING,
    //EpsName: DataTypes.STRING,
    schedule: DataTypes.STRING,
    enable: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};