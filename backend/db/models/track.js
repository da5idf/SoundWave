'use strict';
module.exports = (sequelize, DataTypes) => {
  const Track = sequelize.define('Track', {
    name: {
      allowNull: false,
      type: DataTypes.STRING(100),
    },
    userId: {
      type: DataTypes.INTEGER,
      references: { model: "Users" }
    },
    url: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    albumArt: {
      type: DataTypes.STRING,
    },
    description: {
      type: DataTypes.TEXT
    },
    genreId: {
      allowNull: false,
      type: DataTypes.INTEGER
    }
  }, {});

  Track.associate = function (models) {
    Track.hasMany(models.Comment, { foreignKey: "trackId" });
    Track.belongsTo(models.User, { foreignKey: "userId" });
    Track.belongsTo(models.Genre, { foreignKey: 'genreId' })
  };
  return Track;
};