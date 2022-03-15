import React from 'react';

import {
  Avatar,
  Box,
  Flex,
  Link,
  HStack,
} from '@chakra-ui/react';

function Comments({comment}) {
 
  return (
    <>
      <Flex >
        <Box p={2} >
          <Link href={`/${comment.User.username}`}>
            <Avatar size='md' src={comment.User.profilePic} name={comment.User.username} />
          </Link>
        </Box>
        <Box m={2}>
          <HStack>
            <Box fontWeight='bold' as='h1' fontSize='sm' lineHeight='tight'>
              {comment.User.username}
            </Box>
            <Box color='gray.500' fontWeight='semibold' letterSpacing='wide' fontSize='xs' textTransform='uppercase'>
              {new Date(comment.updatedAt).toDateString()}
            </Box>
          </HStack>
          <Box>
            {comment.content}
          </Box>
        </Box>
      </Flex>
    </>
  )
}

export default Comments;