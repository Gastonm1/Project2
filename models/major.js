'use strict';
module.exports = (sequelize, DataTypes) => {
  const Major = sequelize.define('Major', {
    name: DataTypes.STRING,
    description: DataTypes.TEXT,
    school_id: DataTypes.INTEGER
  }, {});
  Major.associate = function(models) {
    // associations can be defined here
    Major.belongsTo(models.School, {
      foreignKey: 'school_id'
    });
  };
  return Major;
};