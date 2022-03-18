import React from 'react';
import { useSelector } from 'react-redux';


import {
  Avatar,
  Box,
  Flex,
  Link,
  VStack
} from '@chakra-ui/react'

import FollowActions from '../components/FollowActions';

function ProfileCard({ userData }) {
  const userFollowersCount = useSelector(state => state.users.userProfile?.followers.followCount);

  const followerCount = () => {
    if (userFollowersCount == 0 || userFollowersCount > 1) {
      return `${userFollowersCount} Followers`
    }
    return `${userFollowersCount} Follower`
  }

  return (
    <>
      <VStack maxW='md' borderWidth='1px' borderRadius='xl' justify='center'>
        <Box justify='center' p={4}>
          <Link href={`/${userData?.username}`}>
            <Avatar size='2xl' src={userData?.profilePic} alt={userData?.username} />
          </Link>
        </Box>
        <Box>
          <Flex fontWeight='semibold' as='h4' lineHeight='tight'>
            <Link href={`/${userData?.username}`}>
              {userData?.username}
            </Link>
          </Flex>
          <Box>
            {followerCount()} 
          </Box>
          <Flex p={6}>
            <FollowActions profileUserId={userData?.id} />
          </Flex>
          
          
        </Box>
      </VStack>
    </>
  )
};

export default ProfileCard;