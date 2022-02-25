import { useRangeSlider } from '@chakra-ui/react';
import { csrfFetch } from './csrf';

// just variables 
const SET_USER = 'session/setUser';
const REMOVE_USER = 'session/removeUser';

const LIKE = 'songs/LIKE';
const UNLIKE = 'songs/UNLIKE'


// action creators
const setUser = (user) => {
  return {
    type: SET_USER,
    payload: user,
  };
};

const removeUser = () => {
  return {
    type: REMOVE_USER,
  };
};

const like = (song) => ({
  type: LIKE,
  song
})

const unlike = (song) => ({
  type: UNLIKE,
  song
})

// thunks - uses async/await and dispatch
export const login = (userData) => async (dispatch) => {
  const { credential, password } = userData;
  const response = await csrfFetch('/api/session', {
    method: 'POST',
    body: JSON.stringify({
      credential,
      password,
    }),
  });
  const { user, likes } = await response.json();
  if (user) {
    dispatch(setUser({ ...user, likes }));
  } else {
    dispatch(setUser(null))
  }
  return response; 
};

export const restoreUser = () => async dispatch => {
  const response = await csrfFetch('/api/session');
  const { user, likes } = await response.json();
  if (user) {
    dispatch(setUser({ ...user, likes }));
  } else {
    dispatch(setUser(null))
  }
  return response; 
};

export const signup = (user) => async (dispatch) => {
  const { username, email, password } = user;
  const response = await csrfFetch("/api/users", {
    method: "POST",
    body: JSON.stringify({
      username,
      email,
      password,
    }),
  });
  const data = await response.json();
  dispatch(setUser(data.user));
  return response;
};

export const logout = () => async (dispatch) => {
  const response = await csrfFetch('/api/session', {
    method: 'DELETE',
  });
  dispatch(removeUser());
  return response;
};

export const likeSong = (userId, songId) => async dispatch => {
  const response = await csrfFetch('/api/likes', {
    method: 'POST',
    body: JSON.stringify({
      userId,
      songId
    })
  });

  if (response.ok) {
    const likedSong = await response.json();
    dispatch(like(likedSong));
  }
}

export const unlikeSong = (userId, songId) => async dispatch => {
  const response = await csrfFetch('/api/likes', {
    method: 'DELETE',
    body: JSON.stringify({
      userId,
      songId
    })
  });
  if (response.ok) {
    const likedSongId = await response.json();
    dispatch(unlike(likedSongId));
  }
};


const initialState = { user: null };

// reducer
const sessionReducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case SET_USER:
      newState = Object.assign({}, state);
      newState.user = action.payload;
      return newState;
    case REMOVE_USER:
      newState = Object.assign({}, state);
      newState.user = null;
      return newState;
    case LIKE:
      newState = Object.assign({}, state);
      newState.user.likes.push(action.song)
      return newState;
    case UNLIKE: 
      newState = Object.assign({}, state);
      newState.user.likes = state.user.likes.filter((like) => like.id !== action.song)
      return newState;
    default:
      return state;
  }
};

export default sessionReducer;