'use strict';
module.exports = (sequelize, DataTypes) => {
  const Album = sequelize.define('Album', {
    user_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: { model: 'Users' },
    },
    album_title: {
      type: Sequelize.STRING(150),
      allowNull: false,
    },
    img_url: {
      type: Sequelize.STRING(150),
      allowNull: false,
    },
  }, {});
  Album.associate = function(models) {
    Album.belongsTo(models.User, { foreignKey: 'user_id' });
    Album.hasMany(models.Song, { foreignKey: 'album_id' });
  };
  return Album;
};