import React from 'react';

import {
  Avatar,
  Box,
  Container,
  Flex,
  Image,
  Link,
  Spacer
} from '@chakra-ui/react';

import PlayButton from './Buttons/PlayButton.js';

function ExtendedSongCard({ song }) {
  return (
    <>
        <Flex justify='center' p={6} >
          <Box minW='lg' w='50%' >
            <Flex align='center'>
              <Box w={20} h={20} >
                <PlayButton />
              </Box>
              <Box p={4} >
                <Box fontWeight='bold' as='h1' fontSize='3xl' lineHeight='tight' >
                {song.song_title}
                </Box>
                <Box color='gray.500' fontWeight='semibold' letterSpacing='wide' fontSize='md' textTransform='uppercase'>
                {song.Album.album_title}
                </Box>
              </Box>
            </Flex>
            <Flex >
              <audio controls src={song.audio_url}>
                <source></source>
              </audio>
            </Flex>  
          </Box>
          <Spacer />
          <Box maxW='md'>
            <Image w='100%' h='100%' borderRadius='xl' src={song.Album.img_url} alt={song.Album.img_url} />
          </Box>
        </Flex>
    </>
  )
};

export default ExtendedSongCard;
