import { csrfFetch } from "./csrf";

const LOAD_USER = 'user/LOAD_USER';
const FOLLOW_USER ='user/FOLLOW_USER';
const UNFOLLOW_USER = 'user/UNFOLLOW_USER';

const loadUser = (user) => ({
  type: LOAD_USER,
  user
});

export const followUserCount = () => ({
  type: FOLLOW_USER,
});

export const unfollowUserCount = () => ({
  type: UNFOLLOW_USER,
});



export const getUser = (userData) => async (dispatch) => {
  const urlParam = ['parameters?'];
  const { userId, username } = userData;

  if (userId) urlParam.push(`userId=${userId}`);
  if (username) urlParam.push(`username=${username}`);

  const response = await csrfFetch(`/api/users/${urlParam.join('')}`);

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
    case FOLLOW_USER:
      newState = Object.assign({}, state);
      newState.userProfile.followers.followCount++;
      return newState;
    case UNFOLLOW_USER:
      newState = Object.assign({}, state);
      newState.userProfile.followers.followCount--;
      return newState;
    default:
      return state;
  }
};

export default usersReducer;
