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
      type:
        DataTypes.STRING,
    },
    description: DataTypes.TEXT,
  }, {});

  Track.associate = function (models) {
    Track.hasMany(models.Comment, { foreignKey: "trackId" });
    Track.belongsTo(models.User, { foreignKey: "userId" });
  };
  return Track;
};