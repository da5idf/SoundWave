'use strict';
const bcrypt = require('bcryptjs');

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
        bio: "Et qui perferendis ut id tenetur possimus. Aut dolorum dignissimos ea adipisci consequuntur id. Excepturi exercitationem sunt quisquam eligendi. Nostrum optio aut possimus libero. Voluptatem quasi voluptatem quod vel. Rerum et nesciunt sunt corrupti ut ut earum et.",
        hashedPassword: bcrypt.hashSync('password2')
      },
      {
        email: 'ten@user.io',
        username: 'TannerBlack',
        firstName: 'Tanner',
        lastName: "Black",
        location: "Miami",
        profileImageUrl: "https://soundwave-clone.s3.amazonaws.com/profileMan.jpeg",
        bio: "Quos officiis et. Illum autem ullam. Aut veniam officia. Qui quia cupiditate qui ab pariatur eaque aperiam iure. Non hic animi quaerat maxime possimus. Sint amet non voluptatibus porro nostrum.",
        hashedPassword: bcrypt.hashSync('password3')
      },
      {
        email: 'patricia@user.io',
        username: 'Patricia',
        firstName: 'Patricia',
        lastName: "Wolf",
        location: "San Diego",
        profileImageUrl: "https://soundwave-clone.s3.amazonaws.com/profileWoman1.jpeg",
        bio: "Ex tempora amet. Ex qui facere enim est dolores explicabo omnis est reprehenderit. Fuga quod aperiam.",
        hashedPassword: bcrypt.hashSync('password3')
      },
      {
        email: 'teressa@user.io',
        username: 'Teressa',
        firstName: 'Teressa',
        lastName: "Huntington",
        location: "Nashville",
        profileImageUrl: "https://soundwave-clone.s3.amazonaws.com/profileWoman2.jpeg",
        bio: "Molestiae eos perspiciatis ex quae ullam. Consequatur dicta et amet quia enim ullam. Quas vel sed sint tempora consequatur voluptas. Ex placeat aspernatur. Qui nihil et consequatur velit error dolores. Nobis atque tempore.",
        hashedPassword: bcrypt.hashSync('password3')
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});

  }
};