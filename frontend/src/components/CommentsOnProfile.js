import React from 'react';

import {
  Box,
  Flex,
  Heading,
  HStack,
} from '@chakra-ui/react';

function CommentsOnProfile({comment}) {
  return (
    <>
      <Box key={comment.id} p={2}>
        <HStack>
          <Box fontWeight='bold' as='h1' fontSize='sm' lineHeight='tight'>
            {`${comment.song_title},`}
          </Box>
          <Box color='gray.500' fontWeight='semibold' letterSpacing='wide' fontSize='xs' textTransform='uppercase'> 
            {new Date(comment.updatedAt).toDateString()}
          </Box>
        </HStack>
        <Box ml={2}>
          {comment.content}
        </Box>
      </Box>
    </>
  )
}

export default CommentsOnProfile;