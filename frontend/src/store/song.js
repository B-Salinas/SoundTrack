import { csrfFetch } from './csrf';

// variables
const LOAD = 'songs/LOAD';
// const UPLOAD = 'songs/UPLOAD';
// const UPDATE = 'songs/UPDATE';
// const REMOVE = 'songs/DELETE';

// action creator
const load = (songs) => ({
  type: LOAD,
  songs,
});

// const upload = (song) => ({
//   type: UPLOAD,
//   song,
// });

// const update = (song) => ({
//   type: UPDATE,
//   song,
// })

// const remove = (song) => ({
//   type: REMOVE,
//   song,
// })


// thunk 
export const getSongs = () => async dispatch => {
  const response = await csrfFetch(`/api/songs`);

  if (response.ok) {
    const songs = await response.json();
    dispatch(load(songs));
  }
};

export const uploadSong = (album_id, song_title, img_url, audio_url) => async dispatch => {
  const response = await csrfFetch(`/api/songs`, {
    method: 'POST',
    body: JSON.stringify({ 
      album: album_id,
      title: song_title,
      img: img_url,
      audio: audio_url })
  });

  if (response.ok) {
    // const newSong = await response.json();
    // dispatch(upload(newSong)); 
    // instead of dispatching, it will re-route to the explore page and new song will have been uploaded
    console.log("Congrats on your new song :)")
  }
};

const initialState = { allSongs: [] };

// reducer
const songsReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD: {
      const allSongs = [...action.songs];
      return {
        allSongs
      };
    }
    default:
      return state;
  }
}

export default songsReducer;