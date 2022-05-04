'use strict';
const LoremIpsum = require("lorem-ipsum").LoremIpsum;

const lorem = new LoremIpsum({
  sentencesPerParagraph: {
    max: 8,
    min: 4
  },
  wordsPerSentence: {
    max: 16,
    min: 4
  }
});

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    return queryInterface.bulkInsert('Comments', [
      {
        text: lorem.generateSentences(1),
        userId: 1,
        trackId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        text: lorem.generateSentences(1),
        userId: 1,
        trackId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        text: lorem.generateSentences(1),
        userId: 1,
        trackId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        text: lorem.generateSentences(1),
        userId: 1,
        trackId: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        text: lorem.generateSentences(1),
        userId: 2,
        trackId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        text: lorem.generateSentences(1),
        userId: 2,
        trackId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        text: lorem.generateSentences(1),
        userId: 2,
        trackId: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        text: lorem.generateSentences(1),
        userId: 3,
        trackId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        text: lorem.generateSentences(1),
        userId: 3,
        trackId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        text: lorem.generateSentences(1),
        userId: 3,
        trackId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        text: lorem.generateSentences(1),
        userId: 3,
        trackId: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        text: lorem.generateSentences(1),
        userId: 4,
        trackId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        text: lorem.generateSentences(1),
        userId: 4,
        trackId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        text: lorem.generateSentences(1),
        userId: 4,
        trackId: 4,
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
    return queryInterface.bulkDelete('Comments', null, {});
  }
};
