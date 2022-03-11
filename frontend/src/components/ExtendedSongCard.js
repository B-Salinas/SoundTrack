import React from 'react';

import {
  Box,
  Container,
  Flex,
  HStack,
  Image,
  Spacer
} from '@chakra-ui/react';

import PlayButton from './Buttons/PlayButton.js';

function ExtendedSongCard({ song }) {
  return (
    <>
      <Container maxW='container.xl' >
        <Flex justify='center' p={6}>
          <Box minW='lg' w='50%'>
            <Flex align='center'>
              <Box w={20} h={20} >
                <PlayButton />
              </Box>
              <Box p={4} >
                <Box fontWeight='bold' as='h1' fontSize='3xl' lineHeight='tight' >
                  Red Lotus Theme
                </Box>
                <Box color='gray.500' fontWeight='semibold' letterSpacing='wide' fontSize='md' textTransform='uppercase'>
                  Legend of Korra
                </Box>
              </Box>
            </Flex>
            <Box >
              <audio controls src='https://res.cloudinary.com/soundtrack-2/video/upload/v1619803494/audio/red-lotus-theme_mznatf.mp3'>
                <source></source>
              </audio>
            </Box>
          </Box>
          <Spacer />
          <Box maxW='md'>
            <Image w='100%' h='100%' borderRadius='xl' src='https://images-na.ssl-images-amazon.com/images/I/71sgqKo8%2BaL._SL1500_.jpg' alt='https://images-na.ssl-images-amazon.com/images/I/71sgqKo8%2BaL._SL1500_.jpg' />
          </Box>
        </Flex>
      </Container>
    </>
  )
};

export default ExtendedSongCard;