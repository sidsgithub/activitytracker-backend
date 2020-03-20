'use strict';
module.exports = (sequelize, DataTypes) => {
  const LoginData = sequelize.define('LoginData', {
    email: DataTypes.STRING,
    password: DataTypes.STRING
  }, {});
  LoginData.associate = function(models) {
    // associations can be defined here
    LoginData.hasMany(models.Activity, {as: 'activities'})
  };
  return LoginData;
};