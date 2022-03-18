import React from 'react';

import {
  Box,
  Container,
  Flex,
  Image
} from '@chakra-ui/react';

import FollowActions from './FollowActions';

function ProfileHeader({ currentProfile }) {

  return (
    <>
      <Container maxW='container.xl'  >
        <Flex p={6} >
          <Box maxW='sm'>
            <Image w='100%' h='100%' borderRadius='xl' src={currentProfile.profilePic} alt={currentProfile.profilePic} />
          </Box>
          <Box >
            <Box ml={4} fontWeight='bold' as='h1' fontSize='3xl' lineHeight='tight' >
              {currentProfile.username}
            </Box>
            <Box ml={4} color='gray.500' fontWeight='semibold' letterSpacing='wide' fontSize='md' textTransform='uppercase' >
              User since {new Date(currentProfile.createdAt).toDateString()}
            </Box>
            <Box ml={4} mt={2} >
              <FollowActions profileUserId={currentProfile?.id} />
            </Box>
          </Box>
        </Flex>
      </Container>
    </>
  )
}

export default ProfileHeader;