import React from 'react';

import {
  Box,
  Container,
  Flex,
  Image,
  Spacer
} from '@chakra-ui/react';

import PlayButton from './Buttons/PlayButton';

function MiniSongCard() {
  return (
    <>
      <Container maxW='container.sm' bg='green'>
        <Flex justify='center' p={4} bg='orange'>
          <Box maxW='sm' bg='pink' p={2}>
            <Image w='100%' h='100%' borderRadius='xl' src='https://lastfm.freetls.fastly.net/i/u/ar0/001299aa12eb004fc783d1158c72754c.jpg' alt='https://lastfm.freetls.fastly.net/i/u/ar0/001299aa12eb004fc783d1158c72754c.jpg' />
          </Box>
          <Spacer />
          <Box minW='md' w='50%' bg='blue.100'>
            <Flex align='center'>
              <Box bg='yellow.100' >
                <PlayButton />
              </Box>
              <Box p={4} >
                <Box fontWeight='bold' as='h1' fontSize='sm' lineHeight='tight' >
                  Avatar: The Last Airbender
                </Box>
                <Box color='gray.500' fontWeight='semibold' letterSpacing='wide' fontSize='xs' textTransform='uppercase'>
                  The Avatar's Love
                </Box>
              </Box>
            </Flex>
            <Box >
              <audio controls src='https://res.cloudinary.com/soundtrack-2/video/upload/v1619803496/audio/avatars-love_ig8tbr.mp3' >
                <source></source>
              </audio>
            </Box>
          </Box>
        </Flex>
      </Container>
    </>
  )
}

export default MiniSongCard;