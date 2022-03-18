import React from 'react';

import {
  Box,
  Button,
  Flex,
  HStack,
  IconButton,
  Tooltip
} from '@chakra-ui/react';

import { BiUserCheck } from 'react-icons/bi';

function FollowingButton({ handleUnfollow }) {

  return (
    <>
      <Button 
        leftIcon={<BiUserCheck size={22} />} 
        onClick={handleUnfollow} 
        size='md' 
        colorScheme='orange' 
      >
          Following
      </Button>
    </>
  )
}

export default FollowingButton;