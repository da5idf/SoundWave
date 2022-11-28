'use strict';
let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;  // define your schema in options object
}

module.exports = {
  up: (queryInterface, Sequelize) => {
    options.tableName = 'Comments';
    return queryInterface.bulkInsert(options, [
      {
        text: "Proident aliquip sit id nisi consectetur veniam est veniam nulla qui quis mollit eiusmod esse commodo.",
        userId: 1,
        trackId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        text: "Culpa amet minim elit fugiat pariatur consectetur id aliqua do proident.",
        userId: 1,
        trackId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        text: "Consequat dolore Lorem mollit incididunt sunt aute exercitation ex aute laboris voluptate fugiat tempor.",
        userId: 1,
        trackId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        text: "Pariatur dolor tempor ea esse aliquip ex nisi.",
        userId: 1,
        trackId: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        text: "Deserunt esse eiusmod nulla fugiat sunt proident officia amet.",
        userId: 2,
        trackId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        text: "Culpa consectetur eiusmod Lorem incididunt magna ad mollit est duis.",
        userId: 2,
        trackId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        text: "Veniam minim aute esse non.",
        userId: 2,
        trackId: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        text: "Ex enim labore consectetur non commodo sit mollit labore fugiat nulla adipisicing ad in ut velit.",
        userId: 3,
        trackId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        text: "Eiusmod sunt laborum id aliqua duis occaecat.",
        userId: 3,
        trackId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        text: "Ea aliqua occaecat mollit aute adipisicing aute magna dolor ipsum consectetur.",
        userId: 3,
        trackId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        text: "Lorem veniam consequat est magna.",
        userId: 3,
        trackId: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        text: "Est cillum minim esse sit mollit dolore anim sint.",
        userId: 4,
        trackId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        text: "Eiusmod commodo aute sunt est.",
        userId: 4,
        trackId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        text: "Laborum magna voluptate ex.",
        userId: 4,
        trackId: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        text: "Ex enim labore consectetur non commodo sit mollit labore fugiat nulla adipisicing ad in ut velit.",
        userId: 5,
        trackId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        text: "Ex enim labore consectetur non commodo sit mollit labore fugiat nulla adipisicing ad in ut velit.",
        userId: 5,
        trackId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        text: "Ex enim labore consectetur non commodo sit mollit labore fugiat nulla adipisicing ad in ut velit.",
        userId: 5,
        trackId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        text: "Ex enim labore consectetur non commodo sit mollit labore fugiat nulla adipisicing ad in ut velit.",
        userId: 5,
        trackId: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        text: "Ex enim labore consectetur non commodo sit mollit labore fugiat nulla adipisicing ad in ut velit.",
        userId: 5,
        trackId: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    options.tableName = 'Comments';
    return queryInterface.bulkDelete(options);
  }
};
