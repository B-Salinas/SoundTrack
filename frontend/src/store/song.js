import listShuffler from '../utils/listShuffler';
import { csrfFetch } from './csrf';

// variables
const LOAD = 'songs/LOAD';
const LOAD_ONE = 'songs/LOAD_ONE';
const LOAD_FEATURED = 'songs/LOAD_FEATURED';
const UPLOAD = 'songs/UPLOAD';
const UPDATE = 'songs/UPDATE';
const REMOVE = 'songs/DELETE';
const ADD_COMMENT = 'songs/ADD_COMMENT';
const REMOVE_COMMENT = 'songs/REMOVE_COMMENT';

// action creator
const load = (songs) => ({
  type: LOAD,
  songs,
});

const loadOne = (song) => ({
  type: LOAD_ONE,
  song
});

const loadFeatured = (songs) => ({
  type: LOAD_FEATURED,
  songs
})

const upload = (song) => ({
  type: UPLOAD,
  song,
});

const update = (song) => ({
  type: UPDATE,
  song,
});

const remove = (song) => ({
  type: REMOVE,
  song,
});

const addComment = (comment) => ({
  type: ADD_COMMENT,
  comment
});

const removeComment = (commentId) => ({
  type: REMOVE_COMMENT,
  commentId
});




// thunk 
export const getSongs = () => async (dispatch) => {
  const response = await csrfFetch(`/api/songs`);

  if (response.ok) {
    const songs = await response.json();
    dispatch(load(songs));
  }
};

// TEMP THUNK?
export const getFeaturedSongs = () => async (dispatch) => {
  const response = await csrfFetch('/api/songs');

  if (response.ok) {
    const songs = await response.json();
    dispatch(loadFeatured(listShuffler(songs, 3)));
  }
};

export const getSong = (songData) => async (dispatch) => {
  const urlParam = ['parameters?'];
  const { songId, songTitle, albumId } = songData;

  // build the url parameters
  if (songId) urlParam.push(`songId=${songId}`);  // <--- no need for '&' b/c the data passed here is either 'songId' OR 'songTitle' AND 'albumId'
  if (songTitle) urlParam.push(`songTitle=${songTitle}&`);
  if (albumId) urlParam.push(`albumId=${albumId}`);

  const response = await csrfFetch(`/api/songs/${urlParam.join('')}`);

  if (response.ok) {
    const song = await response.json();
    dispatch(loadOne(song));
  }
};

export const uploadSong = (album_id, song_title, img_url, audio_url) => async (dispatch) => {
  const response = await csrfFetch(`/api/songs`, {
    method: 'POST',
    body: JSON.stringify({
      album: album_id,
      title: song_title,
      img: img_url,
      audio: audio_url
    })
  });

  if (response.ok) {
    const newSong = await response.json();
    // dispatch(upload(newSong)); 
    // instead of dispatching, it will re-route to the explore page and new song will have been uploaded
    console.log("Congrats on your new song :)")
  }
};

export const deleteSong = (songId) => async (dispatch) => {
  const response = await csrfFetch('/api/songs', {
    method: 'DELETE',
    body: JSON.stringify({
      song_id: songId
    })
  });

  if (response.ok) {
    // TODO: figure out what happens after song is deleted
    const message = await response.json();
    console.log(message);
  }
};

export const postComment = (userId, songId, content) => async (dispatch) => {
  const response = await csrfFetch('/api/comments', {
    method: 'POST',
    body: JSON.stringify({
      userId,
      songId,
      content
    })
  });

  if (response.ok) {
    const comment = await response.json();
    dispatch(addComment(comment));
  }
};

export const deleteComment = (userId, commentId) => async (dispatch) => {
  const response = await csrfFetch('/api/comments', {
    method: 'DELETE',
    body: JSON.stringify({
      userId,
      commentId
    })
  });

  if (response.ok) {
    dispatch(removeComment(commentId));
  }
};

export const getLikes = (songId) => async (dispatch) => {
  const response = await csrfFetch(`/api/likes/song/${songId}`);

  if (response.ok) {
    return await response.json();
  }
};


const initialState = { allSongs: [], currentSong: null, featuredSongs: null };

// reducer
const songsReducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case LOAD:
      newState = Object.assign({}, state);
      newState.allSongs = action.songs;
      return newState;
    case LOAD_ONE:
      newState = Object.assign({}, state);
      newState.currentSong = action.song;
      return newState;
    case LOAD_FEATURED:
      newState = Object.assign({}, state);
      newState.featuredSongs = action.songs;
      return newState;
    case ADD_COMMENT:
      newState = Object.assign({}, state);
      newState.currentSong.Comments.push(action.comment);
      return newState;
    case REMOVE_COMMENT:
      newState = Object.assign({}, state);
      newState.currentSong.Comments = state.currentSong.Comments.filter((comment) => comment.id !== action.commentId);
      return newState;
    default:
      return state;
  }
}

export default songsReducer;
