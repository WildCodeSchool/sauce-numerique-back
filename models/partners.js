'use strict';
module.exports = (sequelize, DataTypes) => {
  const Partners = sequelize.define('Partners', {
    name: DataTypes.STRING,
    logo: DataTypes.STRING
  }, {});
  Partners.associate = function(models) {
    // associations can be defined here
  };
  return Partners;
};