import { csrfFetch } from './csrf';

// variables
const LOAD = 'songs/LOAD';

// action creator
const load = (songs) => ({
  type: LOAD,
  songs,
});

// thunk 
export const getSongs = () => async dispatch => {
  const response = await csrfFetch(`/api/songs`);

  if (response.ok) {
    const songs = await response.json();
    dispatch(load(songs));
  }
};

const initialState = { allSongs: [] };

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