'use strict';

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
        url: "https://soundwave-clone.s3.amazonaws.com/dmbAlbumArt.jpg",
        albumArt: "https://soundwave-clone.s3.amazonaws.com/dmbAlbumArt.jpg",
        description: "One of DMB's all time classics",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'First Class',
        userId: 2,
        url: "https://soundwave-clone.s3.amazonaws.com/Jack+Harlow+-+First+Class.mp3",
        albumArt: "https://soundwave-clone.s3.amazonaws.com/HarlowArt.png",
        description: "Anim mollit commodo incididunt non eiusmod aute elit ad. Elit laborum laborum ullamco commodo culpa excepteur excepteur mollit cillum aliquip reprehenderit culpa.",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Shoot Me Down',
        userId: 4,
        url: "https://soundwave-clone.s3.amazonaws.com/SHOOT+ME+DOWN.mp3",
        albumArt: "https://soundwave-clone.s3.amazonaws.com/FutureArt.png",
        description: "Fugiat deserunt proident sint et mollit culpa eu enim et consequat non incididunt magna reprehenderit consequat. Elit reprehenderit dolore aute dolor ullamco in tempor officia ea ipsum aute aute officia voluptate.",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Pacific Coast Highway',
        userId: 3,
        url: "https://soundwave-clone.s3.amazonaws.com/Patricia+Wolf+-+Pacific+Coast+Highway.mp3",
        albumArt: "https://soundwave-clone.s3.amazonaws.com/PatriciaWolfArt.png",
        description: "Lorem sunt ullamco elit incididunt mollit ullamco ullamco. Ipsum incididunt esse et voluptate pariatur.",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: '10_10',
        userId: 4,
        url: "https://soundwave-clone.s3.amazonaws.com/10_10.mp3",
        albumArt: "https://soundwave-clone.s3.amazonaws.com/10_10Art.png",
        description: "Sint elit ex Lorem duis laboris eiusmod dolor velit nulla dolor fugiat sunt mollit ad tempor. Nulla esse do et sit ad officia quis id labore sunt tempor minim sit laborum.",
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
