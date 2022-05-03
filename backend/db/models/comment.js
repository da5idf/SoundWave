'use strict';
module.exports = (sequelize, DataTypes) => {
  const Comment = sequelize.define('Comment', {
    text: DataTypes.TEXT,
    userId: DataTypes.INTEGER,
    trackId: DataTypes.INTEGER
  }, {});
  Comment.associate = function (models) {
    Comment.belongsTo(models.User, { foreignKey: "userId" })
    Comment.belongsTo(models.Track, { foreignKey: "trackId" })
  };
  return Comment;
};