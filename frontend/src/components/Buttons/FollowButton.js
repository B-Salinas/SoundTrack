import React from 'react';

import {
  Button,
} from '@chakra-ui/react';

import { BiUserPlus } from 'react-icons/bi';

function FollowButton({ handleFollow }) {
  return (
    <>
      <Button 
        leftIcon={<BiUserPlus size={22} />} 
        onClick={handleFollow}
        size='md' 
        colorScheme='white' 
        variant='outline'
      >
        Follow
      </Button>
    </>
  )
}

export default FollowButton;
