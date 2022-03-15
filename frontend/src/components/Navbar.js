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
          <GridItem w='100%' h='20' >
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
          <GridItem rowSpan={1} colSpan={2} >
            <Center>
              {sessionUser ? 
                <Box mt={8} fontWeight='bold' fontStyle='italic' letterSpacing='widest' fontSize='xs' textTransform='uppercase' >
                  Welcome {sessionUser.username}!
                </Box>
              : null }
            </Center>
          </GridItem>
          <GridItem w='100%' h='20' >
            {sessionUser ? 
              <Box m={4} align='center'>
                <Link href={`/${sessionUser.username}`}>
                  <Avatar size='md' src={sessionUser.profilePic} name={sessionUser.username} />
                </Link>
              </Box>
               : 
              <Box align='center' >
                <LogInButton size={'sm'} mt={6} />
              </Box>
            }
          </GridItem>
          <GridItem w='100%' h='20'>
            {sessionUser ? 
              <Box align='center'>
                <LogOutButton size={'sm'} mt={6} /> 
              </Box>
              : 
              <CreateAccountButton size={'sm'} mt={6} />}
          </GridItem>
          <GridItem w='100%' h='20'/>
        </Grid>
      </Box>
    </>
  )
};

export default Navbar;
