'use strict';
const { faker } = require('@faker-js/faker');

const randomCommentSeed = [];
const numComments = faker.mersenne.rand(22, 45);   // <--- generate this many comments (22 - 44; 45 not inclusive)

for (let i = 0; i < numComments; i++) {
  randomCommentSeed.push({
    user_id: faker.mersenne.rand(1, 9),
    song_id: faker.mersenne.rand(1, 23),
    content: faker.lorem.sentences(),
    createdAt: new Date(),
    updatedAt: new Date()
  });
}

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Comments', randomCommentSeed, {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Comments', null, { truncate: true, cascade: true });
  }
};
