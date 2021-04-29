'use strict';
module.exports = (sequelize, DataTypes) => {
  const Follow = sequelize.define('Follow', {
    user_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: { model: 'Users' },
    },
    followed_user_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: { model: 'Users' },
    },
  }, {});
  Follow.associate = function(models) {
    Follow.belongsTo(models.User, {
      as: 'User',
      foreignKey: 'user_id',
    });
    Follow.belongsTo(models.User, {
      as: 'Follower',
      foreignKey: 'followed_user_id'
    });
  };
  return Follow;
};