'use strict';
let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;  // define your schema in options object
}

module.exports = {
  up: (queryInterface, Sequelize) => {
    options.tableName = 'Genres';
    return queryInterface.bulkInsert(options,
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
    options.tableName = 'Genres';
    return queryInterface.bulkDelete(options);
  }
};
