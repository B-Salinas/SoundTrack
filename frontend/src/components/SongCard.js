import React from 'react';

import {
    Box,
    Container,
    HStack,
    Image,
    LinkBox, 
    LinkOverlay
} from '@chakra-ui/react'

import LikeButton from './LikeButton';

function SongCard({song}) {

    return (
      <>
        <Container minW='xs' borderWidth='2px' borderRadius='xl' overflow='hidden' >
          <LinkBox maxW='xs' >
            <Box mt={4}>
              <Image w='100%' h='100%' borderRadius='xl' src={song.img_url} alt={song.song_title} />
            </Box>
            <Box mt='4' mb='4' ml='1'>
              <Box color='gray.500' fontWeight='semibold' letterSpacing='wide' fontSize='xs' textTransform='uppercase' >
                {song.Album.album_title}
              </Box>
              <HStack display='flex' alignItems='baseline'>
                <Box mt='1' fontWeight='semibold' as='h4' lineHeight='tight' ml={0} mr='auto'>
                  <LinkOverlay href='#'>
                    {song.song_title}
                  </LinkOverlay>
                </Box>
                <Box mr={0} ml='auto'>
                  <LikeButton songId={song.id} />
                </Box>
              </HStack>
              <Box display='flex' mt='4' justifyContent='center' justifyItems='stretch'>
                <audio controls src={song.audio_url}>
                  <source></source>
                </audio>
              </Box>
            </Box>
          </LinkBox>
        </Container>
      </>
    )
}

export default SongCard;