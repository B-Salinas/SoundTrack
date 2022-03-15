import React from 'react';
import { useSelector } from 'react-redux';

import {
  Box,
  Container,
  Flex,
  Image
} from '@chakra-ui/react';

function ProfileHeader({ currentProfile }) {
  const sessionUser = useSelector(state => state.session.user);

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
          </Box>
        </Flex>
      </Container>
    </>
  )
}

export default ProfileHeader;