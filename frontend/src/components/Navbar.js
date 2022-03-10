import React from 'react';
import { useSelector } from 'react-redux';

import {
  Box,
  Center,
  Grid,
  GridItem,
  Heading,
  Icon,
} from '@chakra-ui/react'

import { FaSoundcloud } from 'react-icons/fa';

import LogInButton from './Buttons/LogInButton.js';
import LogOutButton from './Buttons/LogOutButton.js';
import CreateAccountButton from './Buttons/CreateAccountButton.js';

// import NavbarAuth from './NavbarAuth';
// import NavbarUnauth from './NavbarUnauth';

function Navbar() {
  const sessionUser = useSelector(state => state.session.user);
  console.log(sessionUser);
  console.log(sessionUser?.username);


  return (

    <>
      <Box bg='gray.100'>
        <Grid templateColumns='repeat(12, 1fr)' gap={2}>
          <GridItem w='100%' h='20' />
          <GridItem w='100%' h='20' >
            <Center>
              <Icon as={FaSoundcloud} boxSize={20} />
            </Center>
          </GridItem>
          <GridItem w='100%' h='20'>
            <Heading size='sm' mt={8}>
              <Center>
                SOUNDTRACK
              </Center>
            </Heading>
          </GridItem>
          <GridItem w='100%' h='20' />
          <GridItem w='100%' h='20' />
          <GridItem w='100%' h='20' />
          <GridItem w='100%' h='20' />
          <GridItem w='100%' h='20' />
          <GridItem w='100%' h='20' />
          {/* I have to incorporate that terinary symbol so it knows we are logged in */}
          <GridItem w='100%' h='20'>
            <Center>
              {sessionUser ? null : <LogInButton />}
            </Center>
          </GridItem>
          <GridItem w='100%' h='20'>
            {sessionUser ? <LogOutButton /> : <CreateAccountButton size={'sm'} mt={6} />}

          </GridItem>
          <GridItem w='100%' h='20' />
        </Grid>
      </Box>
    </>
  )
};

export default Navbar;
