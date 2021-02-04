'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class IdType extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  IdType.init({
    idType: DataTypes.STRING,
    description: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'IdType',
  });
  return IdType;
};