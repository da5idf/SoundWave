'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    return queryInterface.bulkInsert('Genres',
      [
        {
          name: "Pop",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Rock",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "R&B",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Country",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Soul",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Latin",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Electronic",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Hip Hop",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Folk",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Alternative",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "K-Pop",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Heavy Metal",
          createdAt: new Date(),
          updatedAt: new Date()
        },
      ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    return queryInterface.bulkDelete('Genres', null, {});
  }
};
