import React from 'react';

import { 
  Box,
  Center,
  Grid, 
  GridItem,
  HStack,
  Text,
 } from '@chakra-ui/react'

import LogInButton from './Buttons/LogInButton.js';
import CreateAccountButton from './Buttons/CreateAccountButton.js';

function AltSignIn() {

  return (

    <>
      <Grid templateColumns='repeat(12, 1fr)' templateRows='repeat(6, 1fr)' gap={2} bg='gray.50' >
        <GridItem rowSpan={6} colSpan={1} bg='white'/>
        <GridItem rowSpan={1} colSpan={10} />
        <GridItem rowSpan={6} colSpan={1} bg='white' />
        <GridItem rowSpan={1} colSpan={2} />

        <GridItem rowSpan={1} colSpan={6} >
          <Center>
            <Text fontSize='4xl' mt={1}> Thanks for listening. Now join in. </Text>
          </Center>
        </GridItem>
        <GridItem rowSpan={1} colSpan={2} />
        <GridItem rowSpan={1} colSpan={1} />
        <GridItem rowSpan={1} colSpan={8}>
          <Center>
            <Text fontSize='lg' align='center'>  Get on SoundTrack to connect with friends, share your tracks, and grow your audience. <br /> All for free. </Text>
          </Center>
        </GridItem>
        <GridItem rowSpan={1} colSpan={1} />
        <GridItem rowSpan={1} colSpan={4} />
        <GridItem rowSpan={1} colSpan={2} >
          <Center>
            <CreateAccountButton size={'md'} mt={2} />
          </Center>
        </GridItem>
        <GridItem rowSpan={1} colSpan={4} />
        <GridItem rowSpan={1} colSpan={3} />
        <GridItem rowSpan={1} colSpan={4} justifyContent='center' alignContent='center' >
          <HStack justifyContent='center' mr={10}>
            <Box>
              <Text mt={6} ml={16} fontSize='xs' align='center'>  Already have an account? </Text>
            </Box>
            <Box alignContent='center' >
              <LogInButton />
            </Box>
          </HStack>
        </GridItem>
        <GridItem rowSpan={1} colSpan={3} />
        <GridItem rowSpan={1} colSpan={10} />
      </Grid>
    </>
  );

};

export default AltSignIn;