'use strict';
module.exports = (sequelize, DataTypes) => {
  const Ressources = sequelize.define('Ressources', {
    title: DataTypes.STRING,
    theme: DataTypes.STRING,
    description: DataTypes.STRING
  }, {});
  Ressources.associate = function(models) {
    // associations can be defined here
  };
  return Ressources;
};