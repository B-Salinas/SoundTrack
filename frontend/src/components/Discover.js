import React from 'react';

import { 
  Box 
} from '@chakra-ui/react'

import Hero from './Hero';
import Trending from './Trending'
import AltSignIn from './AltSignIn'

function Discover() {
  return (

    <>
      <Box>
        <Box>
          <Hero />
        </Box>
        <Box>
          <Trending />
        </Box>
        <Box>
          <AltSignIn />
        </Box>
      </Box>

    </>

  )
};

export default Discover;
