'use strict';
let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;  // define your schema in options object
}

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Tracks', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING(100)
      },
      userId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: "Users" }
      },
      url: {
        allowNull: false,
        type: Sequelize.STRING
      },
      albumArt: {
        type: Sequelize.STRING,
        defaultValue: "https://soundwave-clone.s3.amazonaws.com/seeders/defaultAlbumArt.webp"
      },
      description: {
        type: Sequelize.TEXT
      },
      genreId: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      palette: {
        allowNull: false,
        type: Sequelize.STRING,
        defaultValue: "#cbc2b0 #f3db5c"
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    }, options);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Tracks', options);
  }
};