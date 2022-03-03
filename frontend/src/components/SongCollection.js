import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
// import { Redirect } from 'react-router-dom';
import { getSongs } from '../store/song';

// import SongCardTest from './SongCardTest';

function SongCollection() {
  const dispatch = useDispatch();
  // const sessionUser = useSelector(state => state.session.user);
  // const songs = useSelector(state => state.songs.allSongs);

  useEffect(() => {
    dispatch(getSongs());
    // dispatch(uploadSong(1, 'random string', 'google.com', 'youtube.com'));
  }, [dispatch]);

  // if (!sessionUser) return (
  //   <Redirect to="/login" />
  // );

  // if (!songs) {
  //   return null;
  // }


  return (
    <div className="song-collection-container">
      <div className="song-card-row">
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
        <div className="song-card-container">
          <div className="song-image-container">
            <img className="song-image" alt="test" src="https://res.cloudinary.com/soundtrack-2/image/upload/v1619985027/images/star-wars-revenge-of-the-sith_solvex.jpg" height="300px" width="inherit"></img>
          </div>
          <div className="song-info-container">
            <p className="song-title"> Battle of the Heros </p>
            <p className="song-album"> Star Wars: Revenge of the Sith </p>
          </div>
          <div className="song-audio-container">
            <audio controls className="song-audio" src={"https://res.cloudinary.com/soundtrack-2/video/upload/v1619803931/audio/battle-of-the-heros_sgt5iu.mp3"}>
              <source></source>
            </audio>
          </div>
        </div>
        <div className="song-card-container">
          <div className="song-image-container">
            <img className="song-image" alt="test" src="https://res.cloudinary.com/soundtrack-2/image/upload/v1619801657/images/black-panther_aobbc3.jpg" height="300px" width="inherit"></img>
          </div>
          <div className="song-info-container">
            <p className="song-title"> All The Stars </p>
            <p className="song-album"> Black Panther </p>
          </div>
          <div className="song-audio-container">
            <audio controls className="song-audio" src={"https://res.cloudinary.com/soundtrack-2/video/upload/v1619802016/audio/all-the-stars_uuiuxz.mp3"}>
              <source></source>
            </audio>
          </div>
        </div>
        <div className="song-card-container">
          <div className="song-image-container">
            <img className="song-image" alt="test" src="https://res.cloudinary.com/soundtrack-2/image/upload/v1619801658/images/someone-great_ukdnlh.jpg" height="300px" width="inherit"></img>
          </div>
          <div className="song-info-container">
            <p className="song-title"> Dreaming of You </p>
            <p className="song-album"> Someone Great </p>
          </div>
          <div className="song-audio-container">
            <audio controls className="song-audio" src={"https://res.cloudinary.com/soundtrack-2/video/upload/v1619803511/audio/dreaming-of-you_tmyfkk.mp3"}>
              <source></source>
            </audio>
          </div>
        </div>
      </div>


      <div className="song-card-row">
        <div className="song-card-container">
          <div className="song-image-container">
            <img className="song-image" alt="test" src="https://res.cloudinary.com/soundtrack-2/image/upload/v1619985027/images/star-wars-the-phantom-menace_kozwyi.jpg" height="300px" width="inherit"></img>
          </div>
          <div className="song-info-container">
            <p className="song-title"> Duel of the Fates </p>
            <p className="song-album"> Star Wars: The Phantom Menace </p>
          </div>
          <div className="song-audio-container">
            <audio controls className="song-audio" src={"https://res.cloudinary.com/soundtrack-2/video/upload/v1619803942/audio/duel-of-the-fates_o9bvvn.mp3"}>
              <source></source>
            </audio>
          </div>
        </div>
        <div className="song-card-container">
          <div className="song-image-container">
            <img className="song-image" alt="test" src="https://res.cloudinary.com/soundtrack-2/image/upload/v1619801657/images/avatar-the-last-airbender_gdijgm.jpg" height="300px" width="inherit"></img>
          </div>
          <div className="song-info-container">
            <p className="song-title"> Avatar's Love </p>
            <p className="song-album"> Avatar: The Last Airbender </p>
          </div>
          <div className="song-audio-container">
            <audio controls className="song-audio" src={"https://res.cloudinary.com/soundtrack-2/video/upload/v1619803496/audio/avatars-love_ig8tbr.mp3"}>
              <source></source>
            </audio>
          </div>
        </div>
        <div className="song-card-container">
          <div className="song-image-container">
            <img className="song-image" alt="test" src="https://res.cloudinary.com/soundtrack-2/image/upload/v1619801657/images/2001-space-odyssey_nizgyl.jpg" height="300px" width="inherit"></img>
          </div>
          <div className="song-info-container">
            <p className="song-title"> Sprach Zarathustra </p>
            <p className="song-album"> 2001: Space Odyssey </p>
          </div>
          <div className="song-audio-container">
            <audio controls className="song-audio" src={"https://res.cloudinary.com/soundtrack-2/video/upload/v1619803503/audio/sprach-zarathustra_gfyzqj.mp3"}>
              <source></source>
            </audio>
          </div>
        </div>
        <div className="song-card-container">
          <div className="song-image-container">
            <img className="song-image" alt="test" src="https://res.cloudinary.com/soundtrack-2/image/upload/v1619801657/images/akira_lqtoq8.jpg" height="300px" width="inherit"></img>
          </div>
          <div className="song-info-container">
            <p className="song-title"> Tetsuo </p>
            <p className="song-album"> Akira </p>
          </div>
          <div className="song-audio-container">
            <audio controls className="song-audio" src={"https://res.cloudinary.com/soundtrack-2/video/upload/v1619802023/audio/tetsuo_t50jba.mp3"}>
              <source></source>
            </audio>
          </div>
        </div>
      </div>


      <div className="song-card-row">
        <div className="song-card-container">
          <div className="song-image-container">
            <img className="song-image" alt="test" src="https://res.cloudinary.com/soundtrack-2/image/upload/v1619801657/images/breakfast-club_ugry0c.jpg" height="300px" width="inherit"></img>
          </div>
          <div className="song-info-container">
            <p className="song-title"> Don't You (Forget About Me) </p>
            <p className="song-album"> The Breakfast Club </p>
          </div>
          <div className="song-audio-container">
            <audio controls className="song-audio" src={"https://res.cloudinary.com/soundtrack-2/video/upload/v1619802022/audio/dont-you_wuylh7.mp3"}>
              <source></source>
            </audio>
          </div>
        </div>
        <div className="song-card-container">
          <div className="song-image-container">
            <img className="song-image" alt="test" src="https://res.cloudinary.com/soundtrack-2/image/upload/v1619801657/images/black-panther_aobbc3.jpg" height="300px" width="inherit"></img>
          </div>
          <div className="song-info-container">
            <p className="song-title"> Opps </p>
            <p className="song-album"> Black Panther </p>
          </div>
          <div className="song-audio-container">
            <audio controls className="song-audio" src={"https://res.cloudinary.com/soundtrack-2/video/upload/v1619802004/audio/opps_abwbar.mp3"}>
              <source></source>
            </audio>
          </div>
        </div>
        <div className="song-card-container">
          <div className="song-image-container">
            <img className="song-image" alt="test" src="https://res.cloudinary.com/soundtrack-2/image/upload/v1619985016/images/legend-of-korra_hmlauy.jpg" height="300px" width="inherit"></img>
          </div>
          <div className="song-info-container">
            <p className="song-title"> Red Lotus Theme </p>
            <p className="song-album"> The Legend of Korra </p>
          </div>
          <div className="song-audio-container">
            <audio controls className="song-audio" src={"https://res.cloudinary.com/soundtrack-2/video/upload/v1619803494/audio/red-lotus-theme_mznatf.mp3"}>
              <source></source>
            </audio>
          </div>
        </div>
        <div className="song-card-container">
          <div className="song-image-container">
            <img className="song-image" alt="test" src="https://res.cloudinary.com/soundtrack-2/image/upload/v1619801658/images/star-wars-force-awakens_op7sis.jpg" height="300px" width="inherit"></img>
          </div>
          <div className="song-info-container">
            <p className="song-title"> Rey's Theme </p>
            <p className="song-album"> Star Wars: The Force Awakens </p>
          </div>
          <div className="song-audio-container">
            <audio controls className="song-audio" src={"https://res.cloudinary.com/soundtrack-2/video/upload/v1619803505/audio/reys-theme_bxwwy2.mp3"}>
              <source></source>
            </audio>
          </div>
        </div>
      </div>


      <div className="song-card-row">
        <div className="song-card-container">
          <div className="song-image-container">
            <img className="song-image" alt="test" src="https://res.cloudinary.com/soundtrack-2/image/upload/v1619801658/images/star-wars-force-awakens_op7sis.jpg" height="300px" width="inherit"></img>
          </div>
          <div className="song-info-container">
            <p className="song-title"> The Way of the Force </p>
            <p className="song-album"> Star Wars: The Force Awakens </p>
          </div>
          <div className="song-audio-container">
            <audio controls className="song-audio" src={"https://res.cloudinary.com/soundtrack-2/video/upload/v1619803510/audio/ways-of-the-force_juwwq7.mp3"}>
              <source></source>
            </audio>
          </div>
        </div>
        <div className="song-card-container">
          <div className="song-image-container">
            <img className="song-image" alt="test" src="https://res.cloudinary.com/soundtrack-2/image/upload/v1619801658/images/someone-great_ukdnlh.jpg" height="300px" width="inherit"></img>
          </div>
          <div className="song-info-container">
            <p className="song-title"> Do You Think About Me </p>
            <p className="song-album"> Someone Great </p>
          </div>
          <div className="song-audio-container">
            <audio controls className="song-audio" src={"https://res.cloudinary.com/soundtrack-2/video/upload/v1619803480/audio/do-you-think-of-me_s9migs.mp3"}>
              <source></source>
            </audio>
          </div>
        </div>
        <div className="song-card-container">
          <div className="song-image-container">
            <img className="song-image" alt="test" src="https://res.cloudinary.com/soundtrack-2/image/upload/v1619801657/images/akira_lqtoq8.jpg" height="300px" width="inherit"></img>
          </div>
          <div className="song-info-container">
            <p className="song-title"> Kaneda </p>
            <p className="song-album"> Akira </p>
          </div>
          <div className="song-audio-container">
            <audio controls className="song-audio" src={"https://res.cloudinary.com/soundtrack-2/video/upload/v1619801998/audio/kaneda_tcfs85.mp3"}>
              <source></source>
            </audio>
          </div>
        </div>
        <div className="song-card-container">
          <div className="song-image-container">
            <img className="song-image" alt="test" src="https://res.cloudinary.com/soundtrack-2/image/upload/v1619801657/images/avatar-the-last-airbender_gdijgm.jpg" height="300px" width="inherit"></img>
          </div>
          <div className="song-info-container">
            <p className="song-title"> The Last Agni Kai </p>
            <p className="song-album"> Avatar: The Last Airbender </p>
          </div>
          <div className="song-audio-container">
            <audio controls className="song-audio" src={"https://res.cloudinary.com/soundtrack-2/video/upload/v1619803497/audio/last-agni-kai_apopyz.mp3"}>
              <source></source>
            </audio>
          </div>
        </div>
      </div>


    </div>
  )
}

export default SongCollection;

// {
//   songs.map((song) => {
//     return (
//       <SongCardTest song={song} />
//     )
//   })
// }
