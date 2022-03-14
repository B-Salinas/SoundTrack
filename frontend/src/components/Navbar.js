import React from 'react';
import { useSelector } from 'react-redux';

import {
  Avatar,
  Box,
  Center,
  Grid,
  GridItem,
  Heading,
  Icon,
  Link,
  Text,
} from '@chakra-ui/react'

import { FaSoundcloud } from 'react-icons/fa';

import LogInButton from './Buttons/LogInButton.js';
import LogOutButton from './Buttons/LogOutButton.js';
import CreateAccountButton from './Buttons/CreateAccountButton.js';

function Navbar() {
  const sessionUser = useSelector(state => state.session.user);


  return (

    <>
      <Box bg='gray.100'>
        <Grid templateColumns='repeat(12, 1fr)' gap={2}>
          <GridItem w='100%' h='20' />
          <GridItem w='100%' h='20' >
            <Center>
              <Link href={sessionUser ? '/explore' : '/'}>
                <Icon as={FaSoundcloud} boxSize={20} />
              </Link>
            </Center>
          </GridItem>
          <GridItem w='100%' h='20'>
            <Heading size='sm' mt={8}>
              <Center>
                <Link href={sessionUser ? '/explore' : '/'}>
                  SOUNDTRACK
                </Link>
              </Center>
            </Heading>
          </GridItem>
          <GridItem w='100%' h='20' />
          <GridItem w='100%' h='20' />
          <GridItem w='100%' h='20' />
          <GridItem w='100%' h='20' />
          <GridItem w='100%' h='20' />
          <GridItem w='100%' h='20' >
            <Center>
              {sessionUser ? `Welcome ${sessionUser.username}!` : null }
            </Center>
          </GridItem>
          <GridItem w='100%' h='20'>
            {sessionUser ? 
              <Link href='/profile'>
                <Avatar size='md' src={sessionUser.profilePic} name={sessionUser.username} />
              </Link>
               : <LogInButton />}
          </GridItem>
          <GridItem w='100%' h='20'>
            {sessionUser ? <LogOutButton /> : <CreateAccountButton size={'sm'} mt={6} />}
          </GridItem>
          <GridItem w='100%' h='20'/>
        </Grid>
      </Box>
    </>
  )
};

export default Navbar;
