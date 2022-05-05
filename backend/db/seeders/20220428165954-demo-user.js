'use strict';
const bcrypt = require('bcryptjs');
LoremIpsum = require("lorem-ipsum").LoremIpsum;

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
      {
        email: 'dave@user.io',
        username: 'DMB',
        firstName: 'Dave',
        lastName: "Matthews",
        location: "Cincinatti",
        profileImageUrl: "https://soundwave-clone.s3.amazonaws.com/dave-matthews+Medium.jpeg",
        bio: "Dave Matthews Band (also known by the initials DMB) is an American rock band formed in Charlottesville, Virginia, in 1991. The band's founding members were singer-songwriter and guitarist Dave Matthews, bassist Stefan Lessard, drummer and backing vocalist Carter Beauford, violinist and backing vocalist Boyd Tinsley, and saxophonist LeRoi Moore. As of 2022, Matthews, Lessard, and Beauford are the only remaining founding members still performing with the band.",
        hashedPassword: bcrypt.hashSync('password')
      },
      {
        email: 'harlow@user.io',
        username: 'JackHarlow',
        firstName: 'Jack',
        lastName: "Harlow",
        location: "Ohio",
        profileImageUrl: "https://soundwave-clone.s3.amazonaws.com/HarlowArt.png",
        bio: lorem.generateSentences(3),
        hashedPassword: bcrypt.hashSync('password2')
      },
      {
        email: 'patricia@user.io',
        username: 'Patricia',
        firstName: 'Patricia',
        lastName: "Wolf",
        location: "San Diego",
        profileImageUrl: "https://soundwave-clone.s3.amazonaws.com/profileWoman1.jpeg",
        bio: lorem.generateSentences(3),
        hashedPassword: bcrypt.hashSync('password3')
      },
      {
        email: 'ten@user.io',
        username: 'TannerBlack',
        firstName: 'Tanner',
        lastName: "Black",
        location: "Miami",
        profileImageUrl: "https://soundwave-clone.s3.amazonaws.com/profileMan.jpeg",
        bio: lorem.generateSentences(3),
        hashedPassword: bcrypt.hashSync('password3')
      },
      {
        email: 'teressa@user.io',
        username: 'Teressa',
        firstName: 'Teressa',
        lastName: "Huntington",
        location: "Nashville",
        profileImageUrl: "https://soundwave-clone.s3.amazonaws.com/profileWoman2.jpeg",
        bio: lorem.generateSentences(3),
        hashedPassword: bcrypt.hashSync('password3')
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete('Users', {
      username: { [Op.in]: ['Demo-lition', 'FakeUser1', 'FakeUser2'] }
    }, {});
  }
};