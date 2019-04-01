"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert("People", [{
        name: "John Doe",
        isBetaMember: false
      }], {});
    */
   return queryInterface.bulkInsert(
    "Majors",
    [
      {
        name: "Business Management",
        description: "This is the business management major description.",
        school_id: 1,
        createdAt: Sequelize.literal("NOW()"),
        updatedAt: Sequelize.literal("NOW()")
      },
      {
        name: "Business Strategy",
        description: "This is the business strategy major description.",
        school_id: 1,
        createdAt: Sequelize.literal("NOW()"),
        updatedAt: Sequelize.literal("NOW()")
      },
      {
        name: "Municipal Educational Strategy",
        description: "This is the Municipal Educational Strategy major description.",
        school_id: 2,
        createdAt: Sequelize.literal("NOW()"),
        updatedAt: Sequelize.literal("NOW()")
      }
    ],
    {}
  );
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete("People", null, {});
    */
   return queryInterface.bulkDelete("Majors", null, {});
  }
};