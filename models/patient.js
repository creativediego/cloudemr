var NewPatient = sequelize.define('NewPatient', {

    Last_Name: {
      type: Sequelize.STRING
    },

    First_Name: {
        type: Sequelize.STRING
    },

    Address: {
      type: Sequelize.INTEGER

    },
    Street: {
        type: Sequelize.STRING
    
    },

    Date_Of_Birth: {
      type: Sequelize.INTEGER
    },
  },
  {
    freezeNewPatient: true // Model NewPatient will be the same as the model name instead of being pluralized
  });
