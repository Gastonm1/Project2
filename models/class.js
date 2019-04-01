"use strict";
module.exports = (sequelize, DataTypes) => {
  const Class = sequelize.define("Class", {
    name: DataTypes.STRING,
    description: DataTypes.TEXT,
    timeFrame: DataTypes.STRING,
    major_id: DataTypes.INTEGER
  }, {});
  Class.associate = function(models) {
    // associations can be defined here
    Class.belongsTo(models.Major, {
      foreignKey: "major_id"
    });
  };
  return Class;
};