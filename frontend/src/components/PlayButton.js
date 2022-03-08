import React from 'react';
import {
  IconButton
} from '@chakra-ui/react'
import { BsPlayCircle } from 'react-icons/bs';

function PlayButton() {

  // const PLAYING_COLOR = 'orange';
  // const NOT_PLAYING_COLOR = 'gray';

  // const handlePlay = async () => {};


  // FIGURE OUT BUTTON COLOR
  return (
    <>
      <IconButton icon={<BsPlayCircle />} size='lg' fontSize='35px' mt={4} />
    </>
  )
};

export default PlayButton;
