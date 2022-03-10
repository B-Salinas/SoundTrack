import React from 'react';
import {
  IconButton
} from '@chakra-ui/react'

import { AiFillPlayCircle } from 'react-icons/ai';

function PlayButton() {
  // const PLAYING_COLOR = 'orange';
  // const NOT_PLAYING_COLOR = 'gray';

  // const handlePlay = async () => {};
  return (
    <>
      <IconButton icon={<AiFillPlayCircle />} p={2} size='lg' fontSize='35px' color='orange.400' isRound />
    </>
  )
};

export default PlayButton;
