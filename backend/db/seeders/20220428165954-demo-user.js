'use strict';
const bcrypt = require('bcryptjs');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
      {
        email: 'demo@user.io',
        username: 'DemoUser',
        firstName: 'Demo',
        lastName: "User",
        location: "Chicago",
        profileImageUrl: "https://soundwave-clone.s3.amazonaws.com/seeders/demouser.jpeg",
        bio: "Molestiae eos perspiciatis ex quae ullam. Consequatur dicta et amet quia enim ullam. Quas vel sed sint tempora consequatur voluptas. Ex placeat aspernatur. Qui nihil et consequatur velit error dolores. Nobis atque tempore.",
        hashedPassword: bcrypt.hashSync('demoUserPass')
      },
      {
        email: 'dave@user.io',
        username: 'DMB',
        firstName: 'Dave',
        lastName: "Matthews",
        location: "Cincinatti",
        profileImageUrl: "https://soundwave-clone.s3.amazonaws.com/seeders/dave-matthews+Medium.jpeg",
        bio: "Dave Matthews Band (also known by the initials DMB) is an American rock band formed in Charlottesville, Virginia, in 1991. The band's founding members were singer-songwriter and guitarist Dave Matthews, bassist Stefan Lessard, drummer and backing vocalist Carter Beauford, violinist and backing vocalist Boyd Tinsley, and saxophonist LeRoi Moore. As of 2022, Matthews, Lessard, and Beauford are the only remaining founding members still performing with the band.",
        hashedPassword: bcrypt.hashSync('password')
      },
      {
        email: 'harlow@user.io',
        username: 'JackHarlow',
        firstName: 'Jack',
        lastName: "Harlow",
        location: "Ohio",
        profileImageUrl: "https://soundwave-clone.s3.amazonaws.com/seeders/HarlowArt.png",
        bio: "Et qui perferendis ut id tenetur possimus. Aut dolorum dignissimos ea adipisci consequuntur id. Excepturi exercitationem sunt quisquam eligendi. Nostrum optio aut possimus libero. Voluptatem quasi voluptatem quod vel. Rerum et nesciunt sunt corrupti ut ut earum et.",
        hashedPassword: bcrypt.hashSync('password2')
      },
      {
        email: 'future@user.io',
        username: 'Future',
        firstName: 'Future',
        lastName: "HNDRXX",
        location: "Atlanta",
        profileImageUrl: "https://soundwave-clone.s3.amazonaws.com/seeders/futureProfilePic.jpeg",
        bio: "Quos officiis et. Illum autem ullam. Aut veniam officia. Qui quia cupiditate qui ab pariatur eaque aperiam iure. Non hic animi quaerat maxime possimus. Sint amet non voluptatibus porro nostrum.",
        hashedPassword: bcrypt.hashSync('password3')
      },
      {
        email: 'patricia@user.io',
        username: 'Patricia',
        firstName: 'Patricia',
        lastName: "Wolf",
        location: "San Diego",
        profileImageUrl: "https://soundwave-clone.s3.amazonaws.com/seeders/profileWoman1.jpeg",
        bio: "Ex tempora amet. Ex qui facere enim est dolores explicabo omnis est reprehenderit. Fuga quod aperiam.",
        hashedPassword: bcrypt.hashSync('password3')
      },
      {
        email: 'rex@user.io',
        username: 'Rex',
        firstName: 'Rex',
        lastName: "London",
        location: "London",
        profileImageUrl: "https://soundwave-clone.s3.amazonaws.com/seeders/RexProfilePic.png",
        bio: "Ex tempora amet. Ex qui facere enim est dolores explicabo omnis est reprehenderit. Fuga quod aperiam.",
        hashedPassword: bcrypt.hashSync('password3')
      },
      {
        email: 'katykat@user.io',
        username: 'KatyKat',
        firstName: 'Katy',
        lastName: "Perry",
        location: "Los Angeles",
        profileImageUrl: "https://soundwave-clone.s3.amazonaws.com/seeders/pfp_katyperry.jpeg",
        bio: "Molestiae eos perspiciatis ex quae ullam. Consequatur dicta et amet quia enim ullam. Quas vel sed sint tempora consequatur voluptas. Ex placeat aspernatur. Qui nihil et consequatur velit error dolores. Nobis atque tempore.",
        hashedPassword: bcrypt.hashSync('password3')
      },
      {
        email: 'robyn@user.io',
        username: 'robyn',
        firstName: 'Robyn',
        lastName: "-",
        location: "Stockholm",
        profileImageUrl: "https://soundwave-clone.s3.amazonaws.com/seeders/pfp_robyn.jpeg",
        bio: "Molestiae eos perspiciatis ex quae ullam. Consequatur dicta et amet quia enim ullam. Quas vel sed sint tempora consequatur voluptas. Ex placeat aspernatur. Qui nihil et consequatur velit error dolores. Nobis atque tempore.",
        hashedPassword: bcrypt.hashSync('password3')
      },
      {
        email: 'andrewbird@user.io',
        username: 'andrewbird',
        firstName: 'Andrew',
        lastName: "Bird",
        location: "Chicago",
        profileImageUrl: "https://soundwave-clone.s3.amazonaws.com/seeders/pfp_andrewbird.jpeg",
        bio: "Molestiae eos perspiciatis ex quae ullam. Consequatur dicta et amet quia enim ullam. Quas vel sed sint tempora consequatur voluptas. Ex placeat aspernatur. Qui nihil et consequatur velit error dolores. Nobis atque tempore.",
        hashedPassword: bcrypt.hashSync('password3')
      },
      {
        email: 'carlyraejepsen@user.io',
        username: 'carlyraejepsen',
        firstName: 'Carly',
        lastName: "Rae Jepsen",
        location: "British Columbia",
        profileImageUrl: "https://soundwave-clone.s3.amazonaws.com/seeders/pfp_carlyraejepsen.jpeg",
        bio: "Molestiae eos perspiciatis ex quae ullam. Consequatur dicta et amet quia enim ullam. Quas vel sed sint tempora consequatur voluptas. Ex placeat aspernatur. Qui nihil et consequatur velit error dolores. Nobis atque tempore.",
        hashedPassword: bcrypt.hashSync('password3')
      },
      {
        email: 'justinbieber@user.io',
        username: 'belieber',
        firstName: 'Justin',
        lastName: "Bieber",
        location: "London, Canada",
        profileImageUrl: "https://soundwave-clone.s3.amazonaws.com/seeders/pfp_justinbieber.jpeg",
        bio: "Molestiae eos perspiciatis ex quae ullam. Consequatur dicta et amet quia enim ullam. Quas vel sed sint tempora consequatur voluptas. Ex placeat aspernatur. Qui nihil et consequatur velit error dolores. Nobis atque tempore.",
        hashedPassword: bcrypt.hashSync('password3')
      },
      {
        email: 'taylorswift@user.io',
        username: 'swifty',
        firstName: 'Taylor',
        lastName: "Swift",
        location: "West Reading",
        profileImageUrl: "https://soundwave-clone.s3.amazonaws.com/seeders/pfp_taylorswift.jpeg",
        bio: "Molestiae eos perspiciatis ex quae ullam. Consequatur dicta et amet quia enim ullam. Quas vel sed sint tempora consequatur voluptas. Ex placeat aspernatur. Qui nihil et consequatur velit error dolores. Nobis atque tempore.",
        hashedPassword: bcrypt.hashSync('password3')
      },
      {
        email: 'shakira@user.io',
        username: 'shakira',
        firstName: 'Shakira',
        lastName: "-",
        location: "Barranquilla",
        profileImageUrl: "https://soundwave-clone.s3.amazonaws.com/seeders/pfp_shakira.jpeg",
        bio: "Molestiae eos perspiciatis ex quae ullam. Consequatur dicta et amet quia enim ullam. Quas vel sed sint tempora consequatur voluptas. Ex placeat aspernatur. Qui nihil et consequatur velit error dolores. Nobis atque tempore.",
        hashedPassword: bcrypt.hashSync('password3')
      },
      {
        email: 'bacilos@user.io',
        username: 'bacilos',
        firstName: 'Bacilos',
        lastName: "-",
        location: "Miami",
        profileImageUrl: "https://soundwave-clone.s3.amazonaws.com/seeders/pfp_bacilos.jpeg",
        bio: "Molestiae eos perspiciatis ex quae ullam. Consequatur dicta et amet quia enim ullam. Quas vel sed sint tempora consequatur voluptas. Ex placeat aspernatur. Qui nihil et consequatur velit error dolores. Nobis atque tempore.",
        hashedPassword: bcrypt.hashSync('password3')
      },
      {
        email: 'juanes@user.io',
        username: 'juanes',
        firstName: 'Juanes',
        lastName: "--",
        location: "Carolina del Principe",
        profileImageUrl: "https://soundwave-clone.s3.amazonaws.com/seeders/pfp_juanes.jpeg",
        bio: "Molestiae eos perspiciatis ex quae ullam. Consequatur dicta et amet quia enim ullam. Quas vel sed sint tempora consequatur voluptas. Ex placeat aspernatur. Qui nihil et consequatur velit error dolores. Nobis atque tempore.",
        hashedPassword: bcrypt.hashSync('password3')
      },
      {
        email: 'badbunny@user.io',
        username: 'badbunny',
        firstName: 'Bad',
        lastName: "Bunny",
        location: "Puerto Rico",
        profileImageUrl: "https://soundwave-clone.s3.amazonaws.com/seeders/pfp_badbunny.jpeg",
        bio: "Molestiae eos perspiciatis ex quae ullam. Consequatur dicta et amet quia enim ullam. Quas vel sed sint tempora consequatur voluptas. Ex placeat aspernatur. Qui nihil et consequatur velit error dolores. Nobis atque tempore.",
        hashedPassword: bcrypt.hashSync('password3')
      },
      {
        email: 'ironandwine@user.io',
        username: 'Iron and Wine',
        firstName: 'Sam',
        lastName: "Beam",
        location: "Chapin, SC",
        profileImageUrl: "https://soundwave-clone.s3.amazonaws.com/seeders/pfp_ironandwine.jpeg",
        bio: "Molestiae eos perspiciatis ex quae ullam. Consequatur dicta et amet quia enim ullam. Quas vel sed sint tempora consequatur voluptas. Ex placeat aspernatur. Qui nihil et consequatur velit error dolores. Nobis atque tempore.",
        hashedPassword: bcrypt.hashSync('password3')
      },
      {
        email: 'eminem@user.io',
        username: 'Eminem',
        firstName: 'Marshall',
        lastName: "Mathers",
        location: "Detroit",
        profileImageUrl: "https://soundwave-clone.s3.amazonaws.com/seeders/pfp_eminem.jpeg",
        bio: "Molestiae eos perspiciatis ex quae ullam. Consequatur dicta et amet quia enim ullam. Quas vel sed sint tempora consequatur voluptas. Ex placeat aspernatur. Qui nihil et consequatur velit error dolores. Nobis atque tempore.",
        hashedPassword: bcrypt.hashSync('password3')
      },
      {
        email: 'notorious@user.io',
        username: 'Notorious B.I.G.',
        firstName: 'Notorious',
        lastName: "B.I.G.",
        location: "Brooklyn",
        profileImageUrl: "https://soundwave-clone.s3.amazonaws.com/seeders/pfp_notorious.jpeg",
        bio: "Molestiae eos perspiciatis ex quae ullam. Consequatur dicta et amet quia enim ullam. Quas vel sed sint tempora consequatur voluptas. Ex placeat aspernatur. Qui nihil et consequatur velit error dolores. Nobis atque tempore.",
        hashedPassword: bcrypt.hashSync('password3')
      },
      {
        email: 'tupac@user.io',
        username: '2Pac',
        firstName: 'Tupac',
        lastName: "Shakur",
        location: "Los Angeles",
        profileImageUrl: "https://soundwave-clone.s3.amazonaws.com/seeders/pfp_tupac.jpeg",
        bio: "Molestiae eos perspiciatis ex quae ullam. Consequatur dicta et amet quia enim ullam. Quas vel sed sint tempora consequatur voluptas. Ex placeat aspernatur. Qui nihil et consequatur velit error dolores. Nobis atque tempore.",
        hashedPassword: bcrypt.hashSync('password3')
      },
      {
        email: 'kendrick@user.io',
        username: 'Kendrick Lamar',
        firstName: 'Kendrick',
        lastName: "Lamar",
        location: "Compton",
        profileImageUrl: "https://soundwave-clone.s3.amazonaws.com/seeders/pfp_kendricklamar.jpeg",
        bio: "Molestiae eos perspiciatis ex quae ullam. Consequatur dicta et amet quia enim ullam. Quas vel sed sint tempora consequatur voluptas. Ex placeat aspernatur. Qui nihil et consequatur velit error dolores. Nobis atque tempore.",
        hashedPassword: bcrypt.hashSync('password3')
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});

  }
};