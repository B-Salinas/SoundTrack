import React from 'react';

import {
  Box,
  Container,
  HStack,
  Image,
  LinkBox,
  LinkOverlay
} from '@chakra-ui/react';

import PlayButton from './PlayButton';

function ExtendedSongCard({ song }) {
  return (
    <>
      <Container minW='lg' borderWidth='2px' borderRadius='xl' overflow='hidden'>
        <Box >
          <HStack display='flex' alignItems='baseline'>
            <Box >
              <PlayButton />
            </Box>
            <Box borderWidth='1px'>
              <Box fontWeight='semibold' as='h4' lineHeight='tight' ml={0} mr='auto'>
                {song.song_title}
              </Box>
              <Box color='gray.500' fontWeight='semibold' letterSpacing='wide' fontSize='xs' textTransform='uppercase'>
                {song.Album.album_title}
              </Box>
            </Box>
          </HStack>
          <Box display='flex' mt='4' justifyContent='start' justifyItems='stretch'>
            <audio controls src={song.audio_url}>
              <source></source>
            </audio>
          </Box>
        </Box>
        <Box mt={4}>
          <Image w='100%' h='100%' borderRadius='xl' src={song.img_url} alt={song.song_title}/>
        </Box>
      </Container>
    </>
  )
};

export default ExtendedSongCard;