'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class roles extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      //can roles have many users?
      models.roles.hasMany(models.users, {foreignKey: 'roleID'})
    }
  };
  roles.init({
    name: DataTypes.STRING,
    roleType: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'roles',
  });
  return roles;
};