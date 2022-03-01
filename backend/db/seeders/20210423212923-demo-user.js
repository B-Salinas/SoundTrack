'use strict';
const { faker } = require('@faker-js/faker');
const bcrypt = require('bcryptjs');
const { sequelize } = require('../models');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
      {
        username: 'Demo-lition',
        email: 'demo@user.io',
        profilePic: "https://i.ytimg.com/vi/5qap5aO4i9A/maxresdefault.jpg",
        hashedPassword: bcrypt.hashSync('password'),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: 'Hans-Zimmer',
        email: faker.internet.email(),
        profilePic: "https://upload.wikimedia.org/wikipedia/commons/2/2b/Hans-Zimmer-profile.jpg",
        hashedPassword: bcrypt.hashSync(faker.internet.password()),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: 'Jimmy-Newton',
        email: faker.internet.email(),
        profilePic: "https://media.npr.org/assets/img/2020/12/29/photo-dec-28-8-10-29-pm_custom-e9234caf86b3322b44b0557ac81a5450d4f23803.jpg",
        hashedPassword: bcrypt.hashSync(faker.internet.password()),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: 'M83',
        email: faker.internet.email(),
        profilePic: "https://yt3.ggpht.com/ytc/AAUvwnil-kbap5CPKIJcvk80QmujONzM6pEsNHRI0SanxQ=s900-c-k-c0x00ffffff-no-rj",
        hashedPassword: bcrypt.hashSync(faker.internet.password()),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: 'Punk-Daft',
        email: faker.internet.email(),
        profilePic: "https://media.pitchfork.com/photos/6033c6098b8835d37316a598/1:1/w_1800,h_1800,c_limit/Daft-Punk.jpg",
        hashedPassword: bcrypt.hashSync(faker.internet.password()),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: 'Kendrick',
        email: faker.internet.email(),
        profilePic: "https://media.newyorker.com/photos/5ad6313540fc7c73d830a3a8/1:1/w_3004,h_3004,c_limit/St-Felix-Kendrick-Lamar-Pulitzer.jpg",
        hashedPassword: bcrypt.hashSync(faker.internet.password()),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: 'John-Will',
        email: faker.internet.email(),
        profilePic: "https://www.classicalwcrb.org/sites/wcrb/files/styles/x_large/public/201905/john_williams_cr_stu_rosner_0.jpg",
        hashedPassword: bcrypt.hashSync(faker.internet.password()),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: 'Zuckerman-J',
        email: faker.internet.email(),
        profilePic: "https://pbs.twimg.com/profile_images/1109137059426394112/KKAZ7vL1.png",
        hashedPassword: bcrypt.hashSync(faker.internet.password()),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete('Users', null, { truncate: true, cascade: true, restartIdentity: true });
  }
};
