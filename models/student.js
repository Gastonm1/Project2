'use strict';
module.exports = (sequelize, DataTypes) => {
  const Student = sequelize.define('Student', {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    phoneNumber: DataTypes.STRING,
    school_id: DataTypes.INTEGER,
    major_id: DataTypes.INTEGER
  }, {});
  Student.associate = function(models) {
    // associations can be defined here
    Student.belongsTo(models.School, {
      foreignKey: 'school_id'
    });
    Student.belongsTo(models.Major, {
      foreignKey: 'major_id'
    });
  };
  return Student;
};