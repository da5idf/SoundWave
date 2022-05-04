'use strict';
module.exports = (sequelize, DataTypes) => {
  const Track = sequelize.define('Track', {
    name: DataTypes.STRING,
    userId: DataTypes.INTEGER,
    url: DataTypes.STRING,
    description: DataTypes.TEXT,
  }, {});
  Track.associate = function (models) {
    Track.hasMany(models.Comment, { foreignKey: "trackId" });
  };
  return Track;
};