import React from 'react';

import {
  Box,
  Flex,
  Image,
  Link,
  Spacer
} from '@chakra-ui/react';

import PlayButton from './Buttons/PlayButton';

// how do i use useParams to grab the information to build the link to the individual song page???
function MiniSongCard({song}) {
  return (
    <>
      <Box maxW='xl' >
        <Flex >
          <Box m={4} >
            <Link href='/:username/:album/:song_title'>
              <Image w='100%' h='100%' borderRadius='xl' src={song.img_url} alt={song.song_title} />
            </Link>
          </Box>
          <Spacer  />
          <Box minW='md' >
            <Flex align='center' mt={3}>
              <Box >
                <PlayButton />
              </Box>
              <Box pl={2} >
                <Box fontWeight='bold' as='h1' fontSize='sm' lineHeight='tight' >
                  {song.song_title}
                </Box>
                <Box color='gray.500' fontWeight='semibold' letterSpacing='wide' fontSize='xs' textTransform='uppercase'>
                  {song.Album.album_title}
                </Box>
              </Box>
            </Flex>
            <Box >
              <audio controls src={song.audio_url} >
                <source></source>
              </audio>
            </Box>
          </Box>
        </Flex>
      </Box>
    </>
  )
}

export default MiniSongCard;