'use strict';
const { faker } = require("@faker-js/faker");

const randomLikeSeed = [];
const organizedLikes = new Set();               // <--- use a Set to avoid duplicate likes when seeding
const numLikes = faker.mersenne.rand(22, 176);

while (randomLikeSeed.length !== numLikes) {
  const userId = faker.mersenne.rand(1, 9);
  const songId = faker.mersenne.rand(1, 23);
  const key = `${userId} : ${songId}`;

  if (!organizedLikes.has(key)) {
    organizedLikes.add(key);
    randomLikeSeed.push({
      song_id: songId,
      user_id: userId,
      createdAt: new Date(),
      updatedAt: new Date()
    });
  }
}

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Likes', randomLikeSeed, {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Likes', null, { truncate: true, cascade: true });
  }
};
