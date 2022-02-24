import { useRangeSlider } from '@chakra-ui/react';
import { csrfFetch } from './csrf';

// just variables 
const SET_USER = 'session/setUser';
const REMOVE_USER = 'session/removeUser';


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
    default:
      return state;
  }
};

export default sessionReducer;