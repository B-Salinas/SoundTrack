import React from 'react';

import {
  Flex,
  IconButton,
} from '@chakra-ui/react';

import { AiFillPlayCircle } from 'react-icons/ai';

function PlayButton () {
  
  return (
    <>
      <Flex justify='center' mt={4}>
        <IconButton
          icon={<AiFillPlayCircle />}
          size='lg'
          fontSize='45px'
          color='orange.500'
          variant='ghost'
          isRound
        />
      </Flex>
    </>
  )
}

export default PlayButton;