'use strict';
const { faker } = require("@faker-js/faker");

const randomFollowSeed = [];
const organizedFollows = new Set();
const numFollows = faker.mersenne.rand(10, 57);

while (randomFollowSeed.length !== numFollows) {
  const followerUserId = faker.mersenne.rand(1, 9);
  const followingUserId = faker.mersenne.rand(1, 9);
  const key = `follower-${followerUserId} : following-${followingUserId}`;

  if (!organizedFollows.has(key) && followerUserId !== followingUserId) {
    organizedFollows.add(key);
    randomFollowSeed.push({
      user_id: followerUserId,
      followed_user_id: followingUserId,
      createdAt: new Date(),
      updatedAt: new Date()
    });
  }
}

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Follows', randomFollowSeed, {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Follows', null, { truncate: true, cascade: true });
  }
};
