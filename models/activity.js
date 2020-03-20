'use strict';
module.exports = (sequelize, DataTypes) => {
  const Activity = sequelize.define('Activity', {
    title: DataTypes.STRING,
    date: DataTypes.DATEONLY,
    starttime: DataTypes.DATE,
    endtime: DataTypes.DATE,
    loginId: DataTypes.INTEGER
  }, {});
  Activity.associate = function(models) {
    // associations can be defined here
  };
  return Activity;
};