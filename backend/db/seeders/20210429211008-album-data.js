'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Albums', [
      {
        user_id: 8,
        album_title: "Avatar The Last Airbender",
        img_url: "https://lastfm.freetls.fastly.net/i/u/ar0/001299aa12eb004fc783d1158c72754c.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_id: 4,
        album_title: "2001: A Space Odyssey",
        img_url: "https://images-na.ssl-images-amazon.com/images/I/817NoEBCutL._SL1500_.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_id: 6,
        album_title: "Black Panther",
        img_url: "https://images-na.ssl-images-amazon.com/images/I/61DqlsKO22L._SL1400_.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_id: 7,
        album_title: "Star Wars: The Force Awakens",
        img_url: "https://images-na.ssl-images-amazon.com/images/I/71PSMJ0TwmL._SL1500_.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_id: 5,
        album_title: "Tron Legacy",
        img_url: "https://images-na.ssl-images-amazon.com/images/I/611c5AgPCZL._SL1500_.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_id: 2,
        album_title: "Inception",
        img_url: "https://images-na.ssl-images-amazon.com/images/I/81CgNB2mglL._SL1425_.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_id: 3,
        album_title: "The Dark Knight",
        img_url: "https://images-na.ssl-images-amazon.com/images/I/81dwqKFOfwL._SL1425_.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_id: 4,
        album_title: "Oblivion",
        img_url: "https://images-na.ssl-images-amazon.com/images/I/51kT1MUrWyL.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_id: 1,
        album_title: "Someone Great",
        img_url: "https://i.scdn.co/image/ab67706c0000bebb8bd5c1f8b6e92a63ca224aa6",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_id: 1,
        album_title: "Catch Me If You Can",
        img_url: "https://upload.wikimedia.org/wikipedia/en/c/c6/Catch_Me_If_You_Can_Soundtrack.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_id: 1,
        album_title: "The Breakfast Club",
        img_url: "https://images-na.ssl-images-amazon.com/images/I/511CcOrGwiL.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_id: 1,
        album_title: "Akira",
        img_url: "https://images-na.ssl-images-amazon.com/images/I/61L7gyGa%2BnL.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_id: 8,
        album_title: "The Legend of Korra",
        img_url: "https://images-na.ssl-images-amazon.com/images/I/71sgqKo8%2BaL._SL1500_.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_id: 7,
        album_title: "Star Wars: The Phantom Menace",
        img_url: "https://images-na.ssl-images-amazon.com/images/I/81Vl2RQrZkL._SL1500_.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_id: 7,
        album_title: "Star Wars: The Revenge of the Sith",
        img_url: "https://images-na.ssl-images-amazon.com/images/I/81SsLjiKqeL._SL1500_.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },

    ], {});

  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Albums', null, { truncate: true, cascade: true });

  }
};
