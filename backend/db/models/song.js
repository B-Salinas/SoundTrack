'use strict';
module.exports = (sequelize, DataTypes) => {
  const Song = sequelize.define('Song', {
    album_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: { model: "Albums"}
    },
    song_title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    img_url: {
      type: DataTypes.STRING,
      allowNull: false,
      references: { model: "Albums" },
    },
    audio_url: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  }, {});
  Song.associate = function(models) {
    Song.belongsTo(models.Album, { foreignKey: 'album_id' });
    Song.hasMany(models.Like, { foreignKey: 'song_id' });
    Song.hasMany(models.Comment, { foreignKey: 'song_id' });
  };
  return Song;
};