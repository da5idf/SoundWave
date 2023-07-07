'use strict';
let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;  // define your schema in options object
}

module.exports = {
  up: (queryInterface, Sequelize) => {
    options.tableName = 'Tracks';
    return queryInterface.bulkInsert(options, [
      {
        name: 'Ants Marching',
        userId: 2,
        url: "https://soundwave-clone.s3.amazonaws.com/seeders/Ants+Marching.mp3",
        albumArt: "https://soundwave-clone.s3.amazonaws.com/seeders/dmbAlbumArt.jpg",
        description: "One of DMB's all time classics",
        genreId: 10,
        palette: "#b0cfb3 #6f3675",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'First Class',
        userId: 3,
        url: "https://soundwave-clone.s3.amazonaws.com/seeders/Jack+Harlow+-+First+Class.mp3",
        albumArt: "https://soundwave-clone.s3.amazonaws.com/seeders/HarlowArt.png",
        description: "Anim mollit commodo incididunt non eiusmod aute elit ad. Elit laborum laborum ullamco commodo culpa excepteur excepteur mollit cillum aliquip reprehenderit culpa.",
        genreId: 8,
        palette: "#cfb9b4 #7c503a",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Shoot Me Down',
        userId: 4,
        url: "https://soundwave-clone.s3.amazonaws.com/seeders/SHOOT+ME+DOWN.mp3",
        albumArt: "https://soundwave-clone.s3.amazonaws.com/seeders/FutureArt.png",
        description: "Fugiat deserunt proident sint et mollit culpa eu enim et consequat non incididunt magna reprehenderit consequat. Elit reprehenderit dolore aute dolor ullamco in tempor officia ea ipsum aute aute officia voluptate.",
        genreId: 8,
        palette: "#918f8c #c3a775",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Pacific Coast Highway',
        userId: 5,
        url: "https://soundwave-clone.s3.amazonaws.com/seeders/Patricia+Wolf+-+Pacific+Coast+Highway.mp3",
        albumArt: "https://soundwave-clone.s3.amazonaws.com/seeders/PatriciaWolfArt.png",
        description: "Lorem sunt ullamco elit incididunt mollit ullamco ullamco. Ipsum incididunt esse et voluptate pariatur.",
        genreId: 7,
        palette: "#cbc2b0 #f3db5c",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: '10_10',
        userId: 6,
        url: "https://soundwave-clone.s3.amazonaws.com/seeders/10_10.mp3",
        albumArt: "https://soundwave-clone.s3.amazonaws.com/seeders/10_10Art.png",
        description: "Sint elit ex Lorem duis laboris eiusmod dolor velit nulla dolor fugiat sunt mollit ad tempor. Nulla esse do et sit ad officia quis id labore sunt tempor minim sit laborum.",
        genreId: 10,
        palette: "#f4eceb #d26634",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Teenage Dream',
        userId: 7,
        url: "https://soundwave-clone.s3.amazonaws.com/seeders/Katy_Perry_-_Teenage_Dream_Officia_(getmp3.pro).mp3",
        albumArt: "https://soundwave-clone.s3.amazonaws.com/seeders/katyperry_teenagedream_cover.jpeg",
        description: "Sint elit ex Lorem duis laboris eiusmod dolor velit nulla dolor fugiat sunt mollit ad tempor. Nulla esse do et sit ad officia quis id labore sunt tempor minim sit laborum.",
        genreId: 1,
        palette: "#1DA5E9 #EF8DE0",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'California Gurls',
        userId: 7,
        url: "https://soundwave-clone.s3.amazonaws.com/seeders/Katy_Perry_-_California_Gurls_Offi_(getmp3.pro).mp3",
        albumArt: "https://soundwave-clone.s3.amazonaws.com/seeders/katyperry_teenagedream_cover.jpeg",
        description: "Sint elit ex Lorem duis laboris eiusmod dolor velit nulla dolor fugiat sunt mollit ad tempor. Nulla esse do et sit ad officia quis id labore sunt tempor minim sit laborum.",
        genreId: 1,
        palette: "#1DA5E9 #EF8DE0",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Dancing on My Own',
        userId: 8,
        url: "https://soundwave-clone.s3.amazonaws.com/seeders/Robyn_-_Dancing_On_My_Own_Lyrics_(getmp3.pro).mp3",
        albumArt: "https://soundwave-clone.s3.amazonaws.com/seeders/robyn_bodytalk_cover.jpg",
        description: "Sint elit ex Lorem duis laboris eiusmod dolor velit nulla dolor fugiat sunt mollit ad tempor. Nulla esse do et sit ad officia quis id labore sunt tempor minim sit laborum.",
        genreId: 1,
        palette: "#afbfcf #c2ca5e",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Call Your Girlfriend',
        userId: 8,
        url: "https://soundwave-clone.s3.amazonaws.com/seeders/Robyn_-_Call_Your_Girlfriend_(getmp3.pro).mp3",
        albumArt: "https://soundwave-clone.s3.amazonaws.com/seeders/robyn_bodytalk_cover.jpg",
        description: "Sint elit ex Lorem duis laboris eiusmod dolor velit nulla dolor fugiat sunt mollit ad tempor. Nulla esse do et sit ad officia quis id labore sunt tempor minim sit laborum.",
        genreId: 1,
        palette: "#afbfcf #c2ca5e",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Call Me Maybe',
        userId: 10,
        url: "https://soundwave-clone.s3.amazonaws.com/seeders/Carly_Rae_Jepsen_-_Call_Me_Maybe_(getmp3.pro).mp3",
        albumArt: "https://soundwave-clone.s3.amazonaws.com/seeders/carlyrae_callmemaybe_cover.jpeg",
        description: "Sint elit ex Lorem duis laboris eiusmod dolor velit nulla dolor fugiat sunt mollit ad tempor. Nulla esse do et sit ad officia quis id labore sunt tempor minim sit laborum.",
        genreId: 1,
        palette: "#d2b1a5 #2FAAC6",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Ghost',
        userId: 11,
        url: "https://soundwave-clone.s3.amazonaws.com/seeders/Justin_Bieber_-_Ghost_(getmp3.pro).mp3",
        albumArt: "https://soundwave-clone.s3.amazonaws.com/seeders/ghost_cover.jpeg",
        description: "Sint elit ex Lorem duis laboris eiusmod dolor velit nulla dolor fugiat sunt mollit ad tempor. Nulla esse do et sit ad officia quis id labore sunt tempor minim sit laborum.",
        genreId: 1,
        palette: "#8fc591 #1af0eb",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Love Yourself',
        userId: 11,
        url: "https://soundwave-clone.s3.amazonaws.com/seeders/Justin_Bieber_-_Love_Yourself_Lyri_(getmp3.pro).mp3",
        albumArt: "https://soundwave-clone.s3.amazonaws.com/seeders/Justin_Bieber_Purpose.png",
        description: "Sint elit ex Lorem duis laboris eiusmod dolor velit nulla dolor fugiat sunt mollit ad tempor. Nulla esse do et sit ad officia quis id labore sunt tempor minim sit laborum.",
        genreId: 1,
        palette: "#bab7b7 #827c7c",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Georgous',
        userId: 12,
        url: "https://soundwave-clone.s3.amazonaws.com/seeders/Taylor Swift - Gorgeous (Lyric Video).mp3",
        albumArt: "https://soundwave-clone.s3.amazonaws.com/seeders/reputation_cover.jpeg",
        description: "Sint elit ex Lorem duis laboris eiusmod dolor velit nulla dolor fugiat sunt mollit ad tempor. Nulla esse do et sit ad officia quis id labore sunt tempor minim sit laborum.",
        genreId: 1,
        palette: "#bcbcbc #7f7f7f",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Better Than Revenge',
        userId: 12,
        url: "https://soundwave-clone.s3.amazonaws.com/seeders/Better_Than_Revenge_(getmp3.pro).mp3",
        albumArt: "https://soundwave-clone.s3.amazonaws.com/seeders/Taylor_Swift_Speak_Now.png",
        description: "Sint elit ex Lorem duis laboris eiusmod dolor velit nulla dolor fugiat sunt mollit ad tempor. Nulla esse do et sit ad officia quis id labore sunt tempor minim sit laborum.",
        genreId: 1,
        palette: "#d0a6c5 #af4f82",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'La Tortura',
        userId: 13,
        url: "https://soundwave-clone.s3.amazonaws.com/seeders/Shakira_-_La_Tortura_Video_ft_Al_(getmp3.pro).mp3",
        albumArt: "https://soundwave-clone.s3.amazonaws.com/seeders/shakira_tortura.jpeg",
        description: "Sint elit ex Lorem duis laboris eiusmod dolor velit nulla dolor fugiat sunt mollit ad tempor. Nulla esse do et sit ad officia quis id labore sunt tempor minim sit laborum.",
        genreId: 6,
        palette: "#c8aea6 #bb1d2f",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Loca',
        userId: 13,
        url: "https://soundwave-clone.s3.amazonaws.com/seeders/Shakira_-_Loca_Spanish_Version_ft_(getmp3.pro).mp3",
        albumArt: "https://soundwave-clone.s3.amazonaws.com/seeders/shakira_loca_cover.jpeg",
        description: "Sint elit ex Lorem duis laboris eiusmod dolor velit nulla dolor fugiat sunt mollit ad tempor. Nulla esse do et sit ad officia quis id labore sunt tempor minim sit laborum.",
        genreId: 6,
        palette: "#ccad9c #d45862",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Me Enamore',
        userId: 13,
        url: "https://soundwave-clone.s3.amazonaws.com/seeders/Shakira_-_Me_Enamor_Official_Vide_(getmp3.pro).mp3",
        albumArt: "https://soundwave-clone.s3.amazonaws.com/seeders/shakira_enamore_cover.jpeg",
        description: "Sint elit ex Lorem duis laboris eiusmod dolor velit nulla dolor fugiat sunt mollit ad tempor. Nulla esse do et sit ad officia quis id labore sunt tempor minim sit laborum.",
        genreId: 6,
        palette: "#ceb79c #bca959",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Caraluna',
        userId: 14,
        url: "https://soundwave-clone.s3.amazonaws.com/seeders/Bacilos_-_Caraluna_(getmp3.pro).mp3",
        albumArt: "https://soundwave-clone.s3.amazonaws.com/seeders/caraluna_bacilos.jpeg",
        description: "Sint elit ex Lorem duis laboris eiusmod dolor velit nulla dolor fugiat sunt mollit ad tempor. Nulla esse do et sit ad officia quis id labore sunt tempor minim sit laborum.",
        genreId: 6,
        palette: "#a4b2c1 #4484a4",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Camisa Negra',
        userId: 15,
        url: "https://soundwave-clone.s3.amazonaws.com/seeders/Juanes_-_La_Camisa_Negra_(getmp3.pro).mp3",
        albumArt: "https://soundwave-clone.s3.amazonaws.com/seeders/juanes_camisanegra_cover.jpeg",
        description: "Sint elit ex Lorem duis laboris eiusmod dolor velit nulla dolor fugiat sunt mollit ad tempor. Nulla esse do et sit ad officia quis id labore sunt tempor minim sit laborum.",
        genreId: 6,
        palette: "#058eaa #F29D5C",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'A Dios le Pido',
        userId: 15,
        url: "https://soundwave-clone.s3.amazonaws.com/seeders/Juanes_-_A_Dios_Le_Pido_(getmp3.pro).mp3",
        albumArt: "https://soundwave-clone.s3.amazonaws.com/seeders/juanes_undianormal_cover.jpeg",
        description: "Sint elit ex Lorem duis laboris eiusmod dolor velit nulla dolor fugiat sunt mollit ad tempor. Nulla esse do et sit ad officia quis id labore sunt tempor minim sit laborum.",
        genreId: 6,
        palette: "#8893bf #04acec",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Fotografia',
        userId: 15,
        url: "https://soundwave-clone.s3.amazonaws.com/seeders/Juanes_-_Fotografa_ft_Nelly_Furta_(getmp3.pro).mp3",
        albumArt: "https://soundwave-clone.s3.amazonaws.com/seeders/juanes_undianormal_cover.jpeg",
        description: "Sint elit ex Lorem duis laboris eiusmod dolor velit nulla dolor fugiat sunt mollit ad tempor. Nulla esse do et sit ad officia quis id labore sunt tempor minim sit laborum.",
        genreId: 6,
        palette: "#8893bf #04acec",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Un Verano Sin Ti',
        userId: 16,
        url: "https://soundwave-clone.s3.amazonaws.com/seeders/Bad_Bunny_-_Un_Verano_Sin_Ti_Album_(getmp3.pro).mp3",
        albumArt: "https://soundwave-clone.s3.amazonaws.com/seeders/badbunny_unveranosinti_cover.jpeg",
        description: "Sint elit ex Lorem duis laboris eiusmod dolor velit nulla dolor fugiat sunt mollit ad tempor. Nulla esse do et sit ad officia quis id labore sunt tempor minim sit laborum.",
        genreId: 6,
        palette: "#a6c5d4 #fa6604",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Ojitos Lindos',
        userId: 16,
        url: "https://soundwave-clone.s3.amazonaws.com/seeders/https://soundwave-clone.s3.amazonaws.com/seeders/Bad_Bunny_ft_Bomba_Estreo_-_Oji_(getmp3.pro).mp3",
        albumArt: "https://soundwave-clone.s3.amazonaws.com/seeders/badbunny_unveranosinti_cover.jpeg",
        description: "Sint elit ex Lorem duis laboris eiusmod dolor velit nulla dolor fugiat sunt mollit ad tempor. Nulla esse do et sit ad officia quis id labore sunt tempor minim sit laborum.",
        genreId: 6,
        palette: "#a6c5d4 #fa6604",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Flightless Bird American Mouth',
        userId: 17,
        url: "https://soundwave-clone.s3.amazonaws.com/seeders/Iron_Wine_-_Flightless_Bird_Amer_(getmp3.pro).mp3",
        albumArt: "https://soundwave-clone.s3.amazonaws.com/seeders/iron_wine_flightless_cover.jpeg",
        description: "Sint elit ex Lorem duis laboris eiusmod dolor velit nulla dolor fugiat sunt mollit ad tempor. Nulla esse do et sit ad officia quis id labore sunt tempor minim sit laborum.",
        genreId: 10,
        palette: "#E16485 #eca91f",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Call it Dreaming',
        userId: 17,
        url: "https://soundwave-clone.s3.amazonaws.com/seeders/Iron_Wine_-_Call_It_Dreaming_OFF_(getmp3.pro).mp3",
        albumArt: "https://soundwave-clone.s3.amazonaws.com/seeders/iron_wine_call_it_dreaming_cover.jpeg",
        description: "Sint elit ex Lorem duis laboris eiusmod dolor velit nulla dolor fugiat sunt mollit ad tempor. Nulla esse do et sit ad officia quis id labore sunt tempor minim sit laborum.",
        genreId: 10,
        palette: "#ccaba4 #dc3a34",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Pulaski at Night',
        userId: 9,
        url: "https://soundwave-clone.s3.amazonaws.com/seeders/Pulaski_at_Night_-_Andrew_Bird_(getmp3.pro).mp3",
        albumArt: "https://soundwave-clone.s3.amazonaws.com/seeders/andrew_bird_pulaski_cover.jpeg",
        description: "Sint elit ex Lorem duis laboris eiusmod dolor velit nulla dolor fugiat sunt mollit ad tempor. Nulla esse do et sit ad officia quis id labore sunt tempor minim sit laborum.",
        genreId: 10,
        palette: "#7d3d1b #bb6d42",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Sisyphus',
        userId: 9,
        url: "https://soundwave-clone.s3.amazonaws.com/seeders/Andrew_Bird_-_Sisyphus_Official_(getmp3.pro).mp3",
        albumArt: "https://soundwave-clone.s3.amazonaws.com/seeders/andrewbird_sisyphus_cover.jpeg",
        description: "Sint elit ex Lorem duis laboris eiusmod dolor velit nulla dolor fugiat sunt mollit ad tempor. Nulla esse do et sit ad officia quis id labore sunt tempor minim sit laborum.",
        genreId: 10,
        palette: "#C1A874 #203E0F",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Bartender',
        userId: 2,
        url: "https://soundwave-clone.s3.amazonaws.com/seeders/Dave_Matthews_Band_-_Bartender_(getmp3.pro).mp3",
        albumArt: "https://soundwave-clone.s3.amazonaws.com/seeders/DMB_busted_stuff_cover.jpeg",
        description: "Sint elit ex Lorem duis laboris eiusmod dolor velit nulla dolor fugiat sunt mollit ad tempor. Nulla esse do et sit ad officia quis id labore sunt tempor minim sit laborum.",
        genreId: 10,
        palette: "#d3c8ab #b79864",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Idea of You',
        userId: 2,
        url: "https://soundwave-clone.s3.amazonaws.com/seeders/Idea_of_You-_Dave_Matthews_Band-_DM_(getmp3.pro).mp3",
        albumArt: "https://soundwave-clone.s3.amazonaws.com/seeders/DMB_cometomorrow_cover.jpeg",
        description: "Sint elit ex Lorem duis laboris eiusmod dolor velit nulla dolor fugiat sunt mollit ad tempor. Nulla esse do et sit ad officia quis id labore sunt tempor minim sit laborum.",
        genreId: 10,
        palette: "#b4b4b4 #7f7f7f",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'All Too Well',
        userId: 12,
        url: "https://soundwave-clone.s3.amazonaws.com/seeders/Taylor_Swift_-_All_Too_Well_10_Min_(getmp3.pro).mp3",
        albumArt: "https://soundwave-clone.s3.amazonaws.com/seeders/swift_red_cover.webp",
        description: "Sint elit ex Lorem duis laboris eiusmod dolor velit nulla dolor fugiat sunt mollit ad tempor. Nulla esse do et sit ad officia quis id labore sunt tempor minim sit laborum.",
        genreId: 10,
        palette: "#bdb2a0 #ac2c1c",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Juicy',
        userId: 19,
        url: "https://soundwave-clone.s3.amazonaws.com/seeders/The_Notorious_BIG_-_Juicy_Offic_(getmp3.pro).mp3",
        albumArt: "https://soundwave-clone.s3.amazonaws.com/seeders/notorious_cover.jpg",
        description: "Sint elit ex Lorem duis laboris eiusmod dolor velit nulla dolor fugiat sunt mollit ad tempor. Nulla esse do et sit ad officia quis id labore sunt tempor minim sit laborum.",
        genreId: 8,
        palette: "#cab6ba #de292e",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Changes',
        userId: 20,
        url: "https://soundwave-clone.s3.amazonaws.com/seeders/2Pac_-_Changes_Official_Music_Vide_(getmp3.pro).mp3",
        albumArt: "https://soundwave-clone.s3.amazonaws.com/seeders/tupac_changes.jpeg",
        description: "Sint elit ex Lorem duis laboris eiusmod dolor velit nulla dolor fugiat sunt mollit ad tempor. Nulla esse do et sit ad officia quis id labore sunt tempor minim sit laborum.",
        genreId: 8,
        palette: "#EEB237 #541804",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Like Toy Soldiers',
        userId: 18,
        url: "https://soundwave-clone.s3.amazonaws.com/seeders/Eminem_-_Like_Toy_Soldiers_Officia_(getmp3.pro).mp3",
        albumArt: "https://soundwave-clone.s3.amazonaws.com/seeders/encore_cover.jpeg",
        description: "Sint elit ex Lorem duis laboris eiusmod dolor velit nulla dolor fugiat sunt mollit ad tempor. Nulla esse do et sit ad officia quis id labore sunt tempor minim sit laborum.",
        genreId: 8,
        palette: "#ccced1 #3d768c",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Killshot',
        userId: 18,
        url: "https://soundwave-clone.s3.amazonaws.com/seeders/KILLSHOT_Official_Audio_(getmp3.pro).mp3",
        albumArt: "https://soundwave-clone.s3.amazonaws.com/seeders/killshot_cover.jpeg",
        description: "Sint elit ex Lorem duis laboris eiusmod dolor velit nulla dolor fugiat sunt mollit ad tempor. Nulla esse do et sit ad officia quis id labore sunt tempor minim sit laborum.",
        genreId: 8,
        palette: "#bdb5b6 #df2c32",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'I Got a Shot',
        userId: 3,
        url: "https://soundwave-clone.s3.amazonaws.com/seeders/Jack_Harlow_-_I_Got_A_Shot_Officia_(getmp3.pro).mp3",
        albumArt: "https://soundwave-clone.s3.amazonaws.com/seeders/HarlowArt.png",
        description: "Sint elit ex Lorem duis laboris eiusmod dolor velit nulla dolor fugiat sunt mollit ad tempor. Nulla esse do et sit ad officia quis id labore sunt tempor minim sit laborum.",
        genreId: 8,
        palette: "#cfb9b4 #7c503a",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'STAYED DOWN',
        userId: 4,
        url: "https://soundwave-clone.s3.amazonaws.com/seeders/Future_-_STAYED_DOWN_Official_Audi_(getmp3.pro).mp3",
        albumArt: "https://soundwave-clone.s3.amazonaws.com/seeders/FutureArt.png",
        description: "Sint elit ex Lorem duis laboris eiusmod dolor velit nulla dolor fugiat sunt mollit ad tempor. Nulla esse do et sit ad officia quis id labore sunt tempor minim sit laborum.",
        genreId: 8,
        palette: "#918f8c #c3a775",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'DNA',
        userId: 20,
        url: "https://soundwave-clone.s3.amazonaws.com/seeders/DNA_-_Kendrick_Lamar_AUDIO_(getmp3.pro).mp3",
        albumArt: "https://soundwave-clone.s3.amazonaws.com/seeders/damn_cover.jpeg",
        description: "Sint elit ex Lorem duis laboris eiusmod dolor velit nulla dolor fugiat sunt mollit ad tempor. Nulla esse do et sit ad officia quis id labore sunt tempor minim sit laborum.",
        genreId: 8,
        palette: "#b3bcc9 #f0090a",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Die Hard',
        userId: 20,
        url: "https://soundwave-clone.s3.amazonaws.com/seeders/Kendrick_Lamar_-_Die_Hard_ft_Blxst_(getmp3.pro).mp3",
        albumArt: "https://soundwave-clone.s3.amazonaws.com/seeders/diehard_cover.jpeg",
        description: "Sint elit ex Lorem duis laboris eiusmod dolor velit nulla dolor fugiat sunt mollit ad tempor. Nulla esse do et sit ad officia quis id labore sunt tempor minim sit laborum.",
        genreId: 8,
        palette: "#95bdc7 #af7240",
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    options.tableName = 'Tracks';
    return queryInterface.bulkDelete(options);
  }
};
