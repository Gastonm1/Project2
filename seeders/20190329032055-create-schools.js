'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
   return queryInterface.bulkInsert(
    'Schools',
    [
      {
        name: 'Shaolin School of Business',
        description: 'The Shaolin School of Business is a global leader in management education, renowned for its distinctive thought leadership and pioneering approach to learning. Shaolin offers an innovative portfolio of programs: four Full-Time undergraduate programs including leading one-year program and joint degree programs with the engineering, law and medical schools',
        createdAt: Sequelize.literal('NOW()'),
        updatedAt: Sequelize.literal('NOW()')
      },
      {
        name: 'The RZA School of Education',
        description: 'This is the school of education. We host education classes of all kinds.',
        createdAt: Sequelize.literal('NOW()'),
        updatedAt: Sequelize.literal('NOW()')
      },
      {
        name: 'Ghostface School of Killah Art',
        description: 'This is the school of education. We host education classes of all kinds.',
        createdAt: Sequelize.literal('NOW()'),
        updatedAt: Sequelize.literal('NOW()')
      },
      {
        name: 'The 36 Chambers School of Law',
        description: 'This is the school of education. We host education classes of all kinds.',
        createdAt: Sequelize.literal('NOW()'),
        updatedAt: Sequelize.literal('NOW()')
      },
      {
        name: 'The GZA College of Engineering',
        description: 'This is the school of education. We host education classes of all kinds.',
        createdAt: Sequelize.literal('NOW()'),
        updatedAt: Sequelize.literal('NOW()')
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
      return queryInterface.bulkDelete('People', null, {});
    */
   return queryInterface.bulkDelete('Schools', null, {});
  }
};



// 'use strict';
// module.exports = {
//   up: (queryInterface, Sequelize) => {
//     return queryInterface.bulkInsert(
//       'Users',
//       [
//         {
//           firstName: 'John',
//           lastName: 'Doe',
//           createdAt: Sequelize.literal('NOW()'),
//           updatedAt: Sequelize.literal('NOW()')
//         }
//       ],
//       {}
//     );
//   },

//   down: (queryInterface, Sequelize) => {
//     return queryInterface.bulkDelete('Users', null, {});
//   }
// };