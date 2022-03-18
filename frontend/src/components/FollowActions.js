import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  Box,
  HStack,
  IconButton,

} from '@chakra-ui/react';

import { followUser, unfollowUser } from '../store/session';
import FollowButton from './Buttons/FollowButton';
import FollowingButton from './Buttons/FollowingButton';

function FollowActions({ profileUserId }) {

  const dispatch = useDispatch();
  const userId = useSelector(state => state.session.user?.id);
  const isFollowing = useSelector(state => state.session.user?.Following.find(following => following.followed_user_id === profileUserId));

  const [follow, setFollow] = useState(isFollowing ? true : false);

  const handleFollow = () => {
    dispatch(followUser(userId, profileUserId));
    setFollow(true);
  }

  const handleUnfollow = () => {
    dispatch(unfollowUser(userId, profileUserId));
    setFollow(false);
  }

  const iconSwitch = () => {
    if (userId === profileUserId) {
      return null
    }
    
    if (!userId || !follow) {
      return <FollowButton handleFollow={handleFollow} />
    } 
    return <FollowingButton handleUnfollow={handleUnfollow}  />
  }

  return (
    <>
      <Box>
        {iconSwitch()}
      </Box>
    </>
  )
}

export default FollowActions;
