import { useRangeSlider } from '@chakra-ui/react';
import { csrfFetch } from './csrf';

// just variables 
const SET_USER = 'session/setUser';
const REMOVE_USER = 'session/removeUser';

const LIKE = 'songs/LIKE';
const UNLIKE = 'songs/UNLIKE';

const FOLLOW = 'session/FOLLOW';
const UNFOLLOW = 'session/UNFOLLOW';


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
});

const unlike = (song) => ({
  type: UNLIKE,
  song
});

const follow = (user) => ({
  type: FOLLOW,
  user
});

const unfollow = (userId) => ({
  type: UNFOLLOW,
  userId
});

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
  const { user, likes, follows, followers, albums } = await response.json();
  if (user) {
    dispatch(setUser({ ...user, Likes: likes, Following: follows, Followers: followers, Albums: albums }));
  } else {
    dispatch(setUser(null))
  }
  return response;
};

export const restoreUser = () => async dispatch => {
  const response = await csrfFetch('/api/session');
  const { user, likes, follows, followers, albums } = await response.json();
  if (user) {
    dispatch(setUser({ ...user, Likes: likes, Following: follows, Followers: followers, Albums: albums }));
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

export const followUser = (userId, followedUserId) => async (dispatch) => {
  const response = await csrfFetch('/api/follows', {
    method: 'POST',
    body: JSON.stringify({
      userId,
      followedUserId
    })
  });

  if (response.ok) {
    const followedUser = await response.json();
    dispatch(follow(followedUser));
  }
};

export const unfollowUser = (userId, followedUserId) => async (dispatch) => {
  const response = await csrfFetch('/api/follows', {
    method: 'DELETE',
    body: JSON.stringify({
      userId,
      followedUserId
    })
  });

  if (response.ok) {
    const followedUserId = await response.json();
    dispatch(unfollow(followedUserId));
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
      newState.user.Likes.push(action.song);
      return newState;
    case UNLIKE:
      newState = Object.assign({}, state);
      newState.user.Likes = state.user.Likes.filter((like) => like.id !== action.song);
      return newState;
    case FOLLOW:
      newState = Object.assign({}, state);
      newState.user.Following.push(action.user);
      return newState;
    case UNFOLLOW:
      newState = Object.assign({}, state);
      newState.user.Following = state.user.Following.filter((user) => user.followed_user_id !== action.userId);
      return newState;
    default:
      return state;
  }
};

export default sessionReducer;
