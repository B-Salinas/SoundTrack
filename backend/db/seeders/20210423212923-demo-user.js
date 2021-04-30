'use strict';
const faker = require('faker');
const bcrypt = require('bcryptjs');

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Users', [
        {
          username: 'Demo-lition',
          email: 'demo@user.io',
          profilePic: 'https://upload.wikimedia.org/wikipedia/commons/2/2b/Hans-Zimmer-profile.jpg',
          hashedPassword: bcrypt.hashSync('password'),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          username: 'FakeUser1',
          email: faker.internet.email(),
          profilePic: faker.image.avatar(),
          hashedPassword: bcrypt.hashSync(faker.internet.password()),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          username: 'FakeUser2',
          email: faker.internet.email(),
          profilePic: faker.image.avatar(),
          hashedPassword: bcrypt.hashSync(faker.internet.password()),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          username: 'B-Salinas',
          email: 'b.salinas397@gmail.com',
          profilePic: 'https://upload.wikimedia.org/wikipedia/commons/6/6f/Beethoven.jpg',
          hashedPassword: bcrypt.hashSync(faker.internet.password()),
          createdAt: new Date(),
          updatedAt: new Date(),
        }
      ], {});
  },

  down: (queryInterface, Sequelize) => {
      const Op = Sequelize.Op;
      return queryInterface.bulkDelete('Users', {
        username: {
          [Op.in]: ['Demo-lition', 'FakeUser1', 'FakeUser2', 'B-Salinas']
        }
      }, {});
  }
};
