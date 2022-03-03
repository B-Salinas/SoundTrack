import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  Box,
  HStack,
  IconButton
} from '@chakra-ui/react';

import { FaUserPlus, FaUserFriends } from 'react-icons/fa';

import { followUser, unfollowUser } from '../store/session';

function FollowButton({ profileUserId }) {

  const UNFOLLOWED_COLOR = 'black.500';
  const FOLLOWED_COLOR = 'blue.500';

  const dispatch = useDispatch();
  const userId = useSelector(state => state.session.user?.id);
  const userFollowing = useSelector(state => state.session.user?.Following);

  const [follow, setFollow] = useState(UNFOLLOWED_COLOR);

  useEffect(() => {
    const isFollowing = userFollowing?.find(following => following.followed_user_id === profileUserId);
    if (isFollowing) {
      setFollow(FOLLOWED_COLOR);
    }
  }, [userFollowing, profileUserId]);

  const handleFollow = async () => {
    if (follow === UNFOLLOWED_COLOR) {
      await dispatch(followUser(userId, profileUserId));
    } else {
      await dispatch(unfollowUser(userId, profileUserId));
    }

    setFollow(follow === UNFOLLOWED_COLOR ? FOLLOWED_COLOR : UNFOLLOWED_COLOR);
  }

  const iconSwitch = () => {
    if (!userId || follow === UNFOLLOWED_COLOR) {
      return <FaUserPlus />
    }

    return <FaUserFriends />;
  }


  return (
    <>
      <HStack>
        <IconButton
          icon={iconSwitch()}
          isRound
          size='sm'
          color={!userId ? 'black.500' : follow}
          fontSize='15px'
          onClick={handleFollow}
        />
      </HStack>
    </>
  )
}

export default FollowButton;
