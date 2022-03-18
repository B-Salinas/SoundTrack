import React from 'react';

import {
  Avatar,
  Box,
  Flex,
  HStack,
  Link
} from '@chakra-ui/react';

function FollowingOnProfile({following}) {

  const followerCount = () => {
    if (following.numFollowers == 0 || following.numFollowers > 1) {
      return `${following.numFollowers} Followers`
    }
    return `${following.numFollowers} Follower`
  }



  return (
    <>
      <Flex key={following.id}>
        <Box p={2}>
          <Link href={`/${following.username}`}>
            <Avatar size='sm' src={following.profilePic} name={following.profilePic} />
          </Link>
        </Box>
        <HStack>
          <Box fontWeight='bold' as='h1' fontSize='sm' lineHeight='tight'>
            <Link href={`/${following.username}`}>
              {following.username}
            </Link>
          </Box>
          <Box>
            •
          </Box>
          <Box color='gray.500' fontWeight='semibold' letterSpacing='wide' fontSize='xs' textTransform='uppercase'>
            {followerCount()}
          </Box>
        </HStack>
      </Flex>
    
    </>
  )
}

export default FollowingOnProfile