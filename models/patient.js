module.exports = function(sequelize, DataTypes) {
  var Patients = sequelize.define("Patient", {
    text: DataTypes.STRING,
    complete: DataTypes.BOOLEAN
  });
  return Patients;
};
