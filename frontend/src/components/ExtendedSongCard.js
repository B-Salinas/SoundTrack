import React from 'react';

import {
  Box,
  Container,
  HStack,
  Image
} from '@chakra-ui/react';

import PlayButton from './Buttons/PlayButton.js';

function ExtendedSongCard({ song }) {
  return (
    <>
      <Container maxW='container.xl' borderWidth='2px' borderRadius='xl' bg='orange.100' >
        <Box minW='lg' w='50%' mt={4} bg='green.100'>
          <HStack display='flex' alignItems='baseline'>
            <Box>
              <PlayButton />
            </Box>
            <Box p={4}>
              <Box fontWeight='bold' as='h1' fontSize='3xl' lineHeight='tight' >
                Red Lotus Theme
              </Box>
              <Box color='gray.500' fontWeight='semibold' letterSpacing='wide' fontSize='md' textTransform='uppercase'>
                Legend of Korra
              </Box>
            </Box>
          </HStack>
          <Box display='flex' mt='4' justifyContent='start' justifyItems='stretch'>
            <audio controls src='https://res.cloudinary.com/soundtrack-2/video/upload/v1619803494/audio/red-lotus-theme_mznatf.mp3'>
              <source></source>
            </audio>
          </Box>
        </Box>
        <Box maxW='xs' mt={4} bg='red.100'>
          <Image w='100%' h='100%' borderRadius='xl' src='https://images-na.ssl-images-amazon.com/images/I/71sgqKo8%2BaL._SL1500_.jpg' alt='https://images-na.ssl-images-amazon.com/images/I/71sgqKo8%2BaL._SL1500_.jpg'/>
        </Box>
      </Container>
    </>
  )
};

export default ExtendedSongCard;