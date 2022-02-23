// import { useState } from 'react';
// import { Redirect } from 'react-router-dom';

// import songsReducer from '../store/song';

import './stylesheets/SongCardTest.css'


function SongCardTest({ song }) {
  console.log(song);

  return (
    <div className="song-card-container">
      <div className="song-image-container">
        <img className="song-image" alt="test" src="https://res.cloudinary.com/soundtrack-2/image/upload/v1619985016/images/legend-of-korra_hmlauy.jpg" height="300px" width="inherit"></img>
      </div>
      <div className="song-info-container">
          <p className="song-title"> Service and Sacrifice </p>
          <p className="song-album"> The Legend Of Korra </p>
      </div>
      <div className="song-audio-container">
        <audio controls className="song-audio" src={"https://res.cloudinary.com/soundtrack-2/video/upload/v1619803505/audio/service-and-sacrifice_w9xrfh.mp3"}>
          <source></source>
        </audio>
      </div>
    </div>
  )
};

export default SongCardTest;

// <div className="song-image-container">
//         <img className="song-image" alt="test" src="https://res.cloudinary.com/soundtrack-2/image/upload/v1619985027/images/star-wars-revenge-of-the-sith_solvex.jpg" height="300px" width="inherit"></img>
//       </div>
//       <div className="song-audio-container">
//         <audio controls className="song-audio" src={"https://res.cloudinary.com/soundtrack-2/video/upload/v1619803931/audio/battle-of-the-heros_sgt5iu.mp3"}>
//           <source></source>
//         </audio>
//       </div>
//       <div className="song-image-container">
//         <img className="song-image" alt="test" src="https://res.cloudinary.com/soundtrack-2/image/upload/v1619801657/images/avatar-the-last-airbender_gdijgm.jpg" height="300px" width="inherit"></img>
//       </div>
//       <div className="song-audio-container">
//         <audio controls className="song-audio" src={"https://res.cloudinary.com/soundtrack-2/video/upload/v1619803497/audio/last-agni-kai_apopyz.mp3"}>
//           <source></source>
//         </audio>
//       </div>