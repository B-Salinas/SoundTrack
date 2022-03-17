import React from 'react';

import {
  Box,
  HStack,
} from '@chakra-ui/react';

function LikesOnProfile({like}) {
  return (
    <>
      <Box key={like.id} p={2} >
        <Box fontWeight='bold' as='h1' fontSize='sm' lineHeight='tight'>
          {like.song_title}
        </Box>
        <Box  color='gray.500' fontWeight='semibold' letterSpacing='wide' fontSize='xs' textTransform='uppercase'>
          {like.album_title} 
        </Box>
        <Box>
          {`${like.numLikes} likes • ${like.numComments} comments`}
        </Box>
      </Box>
    </>
  )
}

export default LikesOnProfile;