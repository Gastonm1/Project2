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
        name: 'School of Business',
        description: 'This is the school of business. We host business classes of all kinds.',
        createdAt: Sequelize.literal('NOW()'),
        updatedAt: Sequelize.literal('NOW()')
      },
      {
        name: 'School of Education',
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