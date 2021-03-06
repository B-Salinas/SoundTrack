'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Songs', [
      {
        album_id: 12,
        song_title: "Doll's Polyphony",
        img_url: "https://images-na.ssl-images-amazon.com/images/I/61L7gyGa%2BnL.jpg",
        audio_url: "https://res.cloudinary.com/soundtrack-2/video/upload/v1619802013/audio/dolls-polyphony_lquiop.mp3",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        album_id: 12,
        song_title: "Kaneda",
        img_url: "https://images-na.ssl-images-amazon.com/images/I/61L7gyGa%2BnL.jpg",
        audio_url: "https://res.cloudinary.com/soundtrack-2/video/upload/v1619801998/audio/kaneda_tcfs85.mp3",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        album_id: 12,
        song_title: "Tetsuo",
        img_url: "https://images-na.ssl-images-amazon.com/images/I/61L7gyGa%2BnL.jpg",
        audio_url: "https://res.cloudinary.com/soundtrack-2/video/upload/v1619802023/audio/tetsuo_t50jba.mp3",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        album_id: 3,
        song_title: "All The Stars",
        img_url: "https://images-na.ssl-images-amazon.com/images/I/61DqlsKO22L._SL1400_.jpg",
        audio_url: "https://res.cloudinary.com/soundtrack-2/video/upload/v1619802016/audio/all-the-stars_uuiuxz.mp3",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        album_id: 3,
        song_title: "Opps",
        img_url: "https://images-na.ssl-images-amazon.com/images/I/61DqlsKO22L._SL1400_.jpg",
        audio_url: "https://res.cloudinary.com/soundtrack-2/video/upload/v1619802004/audio/opps_abwbar.mp3",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        album_id: 11,
        song_title: "Don't You (Forget About Me)",
        img_url: "https://images-na.ssl-images-amazon.com/images/I/511CcOrGwiL.jpg",
        audio_url: "https://res.cloudinary.com/soundtrack-2/video/upload/v1619802022/audio/dont-you_wuylh7.mp3",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        album_id: 9,
        song_title: "Great One",
        img_url: "https://i.scdn.co/image/ab67706c0000bebb8bd5c1f8b6e92a63ca224aa6",
        audio_url: "https://res.cloudinary.com/soundtrack-2/video/upload/v1619803478/audio/great-one_l5ntkw.mp3",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        album_id: 9,
        song_title: "Mansard Roof",
        img_url: "https://i.scdn.co/image/ab67706c0000bebb8bd5c1f8b6e92a63ca224aa6",
        audio_url: "https://res.cloudinary.com/soundtrack-2/video/upload/v1619803485/audio/mansard-roof_m5m4wc.mp3",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        album_id: 9,
        song_title: "Dreaming Of You",
        img_url: "https://i.scdn.co/image/ab67706c0000bebb8bd5c1f8b6e92a63ca224aa6",
        audio_url: "https://res.cloudinary.com/soundtrack-2/video/upload/v1619803511/audio/dreaming-of-you_tmyfkk.mp3",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        album_id: 9,
        song_title: "Do You Think About Me",
        img_url: "https://i.scdn.co/image/ab67706c0000bebb8bd5c1f8b6e92a63ca224aa6",
        audio_url: "https://res.cloudinary.com/soundtrack-2/video/upload/v1619803480/audio/do-you-think-of-me_s9migs.mp3",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        album_id: 1,
        song_title: "Leaves From The Vine",
        img_url: "https://lastfm.freetls.fastly.net/i/u/ar0/001299aa12eb004fc783d1158c72754c.jpg",
        audio_url: "https://res.cloudinary.com/soundtrack-2/video/upload/v1619803481/audio/leaves-from-the-vine_a3hc8q.mp3",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        album_id: 1,
        song_title: "The Last Agni Kai",
        img_url: "https://lastfm.freetls.fastly.net/i/u/ar0/001299aa12eb004fc783d1158c72754c.jpg",
        audio_url: "https://res.cloudinary.com/soundtrack-2/video/upload/v1619803497/audio/last-agni-kai_apopyz.mp3",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        album_id: 1,
        song_title: "The Avatar's Love",
        img_url: "https://lastfm.freetls.fastly.net/i/u/ar0/001299aa12eb004fc783d1158c72754c.jpg",
        audio_url: "https://res.cloudinary.com/soundtrack-2/video/upload/v1619803496/audio/avatars-love_ig8tbr.mp3",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        album_id: 13,
        song_title: "Service and Sacrifice",
        img_url: "https://images-na.ssl-images-amazon.com/images/I/71sgqKo8%2BaL._SL1500_.jpg",
        audio_url: "https://res.cloudinary.com/soundtrack-2/video/upload/v1619803505/audio/service-and-sacrifice_w9xrfh.mp3",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        album_id: 13,
        song_title: "Red Lotus Theme",
        img_url: "https://images-na.ssl-images-amazon.com/images/I/71sgqKo8%2BaL._SL1500_.jpg",
        audio_url: "https://res.cloudinary.com/soundtrack-2/video/upload/v1619803494/audio/red-lotus-theme_mznatf.mp3",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        album_id: 2,
        song_title: "Overture: Atmostphere",
        img_url: "https://images-na.ssl-images-amazon.com/images/I/817NoEBCutL._SL1500_.jpg",
        audio_url: "https://res.cloudinary.com/soundtrack-2/video/upload/v1619803490/audio/overture-atmospheres_nqw7m1.mp3",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        album_id: 2,
        song_title: "Sprach Zarathustra",
        img_url: "https://images-na.ssl-images-amazon.com/images/I/817NoEBCutL._SL1500_.jpg",
        audio_url: "https://res.cloudinary.com/soundtrack-2/video/upload/v1619803503/audio/sprach-zarathustra_gfyzqj.mp3",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        album_id: 4,
        song_title: "Attack on Jakku Village",
        img_url: "https://images-na.ssl-images-amazon.com/images/I/71PSMJ0TwmL._SL1500_.jpg",
        audio_url: "https://res.cloudinary.com/soundtrack-2/video/upload/v1619803497/audio/attack-on-jakku_o497ea.mp3",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        album_id: 4,
        song_title: "Rey's Theme",
        img_url: "https://images-na.ssl-images-amazon.com/images/I/71PSMJ0TwmL._SL1500_.jpg",
        audio_url: "https://res.cloudinary.com/soundtrack-2/video/upload/v1619803505/audio/reys-theme_bxwwy2.mp3",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        album_id: 4,
        song_title: "The Way of the Force",
        img_url: "https://images-na.ssl-images-amazon.com/images/I/71PSMJ0TwmL._SL1500_.jpg",
        audio_url: "https://res.cloudinary.com/soundtrack-2/video/upload/v1619803510/audio/ways-of-the-force_juwwq7.mp3",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        album_id: 14,
        song_title: "The Duel of the Fates",
        img_url: "https://images-na.ssl-images-amazon.com/images/I/81Vl2RQrZkL._SL1500_.jpg",
        audio_url: "https://res.cloudinary.com/soundtrack-2/video/upload/v1619803942/audio/duel-of-the-fates_o9bvvn.mp3",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        album_id: 15,
        song_title: "The Battle of the Heros",
        img_url: "https://images-na.ssl-images-amazon.com/images/I/81SsLjiKqeL._SL1500_.jpg",
        audio_url: "https://res.cloudinary.com/soundtrack-2/video/upload/v1619803931/audio/battle-of-the-heros_sgt5iu.mp3",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});

  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Songs', null, { truncate: true, cascade: true });
  }
};
