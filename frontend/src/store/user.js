import { csrfFetch } from "./csrf";

const LOAD_USER = 'user/LOAD_USER';

const loadUser = (user) => ({
  type: LOAD_USER,
  user
});


export const getUser = (viewingUserId) => async (dispatch) => {
  const response = await csrfFetch(`/api/users/${viewingUserId}`);

  if (response.ok) {
    const user = await response.json();
    dispatch(loadUser(user));
  }
};


const initialState = { userProfile: null };

const usersReducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case LOAD_USER:
      newState = Object.assign({}, state);
      newState.userProfile = action.user;
      return newState;
    default:
      return state;
  }
};

export default usersReducer;
