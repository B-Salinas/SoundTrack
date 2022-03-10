import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  HStack,
  IconButton
} from '@chakra-ui/react';

import { FaUserPlus, FaUserFriends } from 'react-icons/fa';
import { followUser, unfollowUser } from '../../store/session';

function FollowButton({ profileUserId }) {

  const UNFOLLOWED_COLOR = 'black.500';
  const FOLLOWED_COLOR = 'blue.500';

  const dispatch = useDispatch();
  const userId = useSelector(state => state.session.user?.id);
  const isFollowing = useSelector(state => state.session.user?.Following.find(following => following.followed_user_id === profileUserId));

  const [follow, setFollow] = useState(isFollowing ? FOLLOWED_COLOR : UNFOLLOWED_COLOR);

  const handleFollow = () => {
    if (follow === FOLLOWED_COLOR) {
      dispatch(unfollowUser(userId, profileUserId));
    } else {
      dispatch(followUser(userId, profileUserId));
    }

    setFollow(follow === FOLLOWED_COLOR ? UNFOLLOWED_COLOR : FOLLOWED_COLOR);
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
          color={userId ? follow : UNFOLLOWED_COLOR}
          fontSize='15px'
          onClick={handleFollow}
        />
      </HStack>
    </>
  )
}

export default FollowButton;
