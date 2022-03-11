import React from 'react';

import { 
  Box,
  Input
} from '@chakra-ui/react'

function CommentSection() {
  return (
    <>
      <Box>
        <Input placeholder='Add a comment...' />
      </Box>
    </>
  )
}

export default CommentSection;