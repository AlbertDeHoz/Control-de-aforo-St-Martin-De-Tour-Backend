'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Enrollment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.Service, {foreignKey: 'code', targetKey: 'code'});
    }
  };
  Enrollment.init({
    idNumber: DataTypes.STRING,
    //code: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Enrollment',
  });
  return Enrollment;
};