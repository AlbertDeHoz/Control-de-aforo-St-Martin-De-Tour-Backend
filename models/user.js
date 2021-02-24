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
      this.belongsTo(models.EPS, {foreignKey: 'EpsName', as: 'epsName', targetKey: 'epsName'});
      this.belongsTo(models.IdType, {foreignKey: 'idType', targetKey: 'idType'});

    }
  };
  User.init({
    id: {
      type: DataTypes.INTEGER(15),
      primaryKey: true,
      null: false,
      autoIncrement: true
    },
    idNumber: DataTypes.STRING,
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    phone: DataTypes.INTEGER,
    age: DataTypes.INTEGER,
    birth: DataTypes.DATE,
    address: DataTypes.STRING,
    schedule: DataTypes.STRING,
    enable: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};