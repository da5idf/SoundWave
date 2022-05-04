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
    return queryInterface.bulkInsert('Tracks', [
      {
        name: 'Ants Marching',
        userId: 1,
        url: "https://soundwave-clone.s3.amazonaws.com/Ants+Marching.mp3",
        albumArt: "https://soundwave-clone.s3.amazonaws.com/DaveMatthewsArt.png",
        description: "One of DMB's all time classics",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'First Class',
        userId: 2,
        url: "https://soundwave-clone.s3.amazonaws.com/Jack+Harlow+-+First+Class.mp3",
        albumArt: "https://soundwave-clone.s3.amazonaws.com/HarlowArt.png",
        description: lorem.generateSentences(2),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Shoot Me Down',
        userId: 4,
        url: "https://soundwave-clone.s3.amazonaws.com/SHOOT+ME+DOWN.mp3",
        albumArt: "https://soundwave-clone.s3.amazonaws.com/FutureArt.png",
        description: lorem.generateSentences(2),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Pacific Coast Highway',
        userId: 3,
        url: "https://soundwave-clone.s3.amazonaws.com/Patricia+Wolf+-+Pacific+Coast+Highway.mp3",
        albumArt: "https://soundwave-clone.s3.amazonaws.com/PatriciaWolfArt.png",
        description: lorem.generateSentences(2),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: '10_10',
        userId: 4,
        url: "https://soundwave-clone.s3.amazonaws.com/10_10.mp3",
        albumArt: "https://soundwave-clone.s3.amazonaws.com/10_10Art.png",
        description: lorem.generateSentences(2),
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    return queryInterface.bulkDelete('Tracks', null, {});
  }
};
