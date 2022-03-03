import React from 'react';

import { 
  Button,
  Center,
  Flex,
  Grid,
  GridItem,
  Text
 } from '@chakra-ui/react'

import FeaturedSongs from './FeaturedSongs';

import './stylesheets/Trending.css';

function Trending() {
  return (

    <>
      <Grid templateColumns='repeat(12, 1fr)' templateRows='repeat(7, 1fr)' gap={2}>
        <GridItem rowSpan={6} colSpan={1} />
        <GridItem rowSpan={1} colSpan={10} mt={4} >
          <Center>
            <Text fontSize='2xl' mt={6}> Hear what's trending for free in the SoundTrack Community </Text>
          </Center>
        </GridItem>
        <GridItem rowSpan={6} colSpan={1} />
        <GridItem rowSpan={5} colSpan={10}>
          <Flex >
            <FeaturedSongs />
          </Flex>
        </GridItem>
        <GridItem rowSpan={1} colSpan={5} />
        <GridItem rowSpan={1} colSpan={2} >
          <Center>
            <Button size='md' mt={2} colorScheme='gray'>
              Explore Trending Tracks
            </Button>
          </Center>
        </GridItem>
        <GridItem rowSpan={1} colSpan={5}/>
      </Grid>
    </>
  );
}

export default Trending;