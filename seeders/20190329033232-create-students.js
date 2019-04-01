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
    "Students",
    [
      {
        name: "Marques Gaston",
        email: "marques@gmail.com",
        password: "3123123121",
        classes: "1,3,5",
        school_id: 1,
        major_id: 1,
        createdAt: Sequelize.literal("NOW()"),
        updatedAt: Sequelize.literal("NOW()")
      },
      {
        name: "Marques Gaston",
        email: "marques@gmail.com",
        password: "3123123121",
        classes: "1,3,5",
        school_id: 1,
        major_id: 2,
        createdAt: Sequelize.literal("NOW()"),
        updatedAt: Sequelize.literal("NOW()")
      },
      {
        name: "Mike Plass",
        email: "mike@gmail.com",
        password: "3123123121",
        classes: "1,3,5",
        school_id: 2,
        major_id: 3,
        createdAt: Sequelize.literal("NOW()"),
        updatedAt: Sequelize.literal("NOW()")
      },
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
   return queryInterface.bulkDelete("Students", null, {});
  }
};