'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('People', [
        {
        user_id: 1,
        album_title: 'Transformers',
        img_url: 'https://images-na.ssl-images-amazon.com/images/I/71skeG5vPDL._SL1425_.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ], {});
  
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
