'use strict';
module.exports = (sequelize, DataTypes) => {
  const Like = sequelize.define('Like', {
    song_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: { model: 'Songs' },
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: { model: 'Users' },
    },
  }, {});
  Like.associate = function(models) {
    Like.belongsTo(models.User, { foreignKey: 'user_id' });
    Like.belongsTo(models.Song, { foreignKey: 'song_id' });
  };
  return Like;
};