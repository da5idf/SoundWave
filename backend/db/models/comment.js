'use strict';
module.exports = (sequelize, DataTypes) => {
  const Comment = sequelize.define('Comment', {
    text: {
      allowNull: false,
      type: DataTypes.TEXT,
    },
    userId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: { model: "Users" }
    },
    trackId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: { model: "Tracks" }
    }
  }, {});
  Comment.associate = function (models) {
    Comment.belongsTo(models.User, { foreignKey: "userId" });
    Comment.belongsTo(models.Track, { foreignKey: "trackId" });
  };
  return Comment;
};