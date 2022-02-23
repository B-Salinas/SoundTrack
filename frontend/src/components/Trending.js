import React from 'react';
// import { NavLink } from 'react-router-dom';

import { 
  Button,
  Center,
  Grid,
  GridItem,
  Text
 } from '@chakra-ui/react'

import SongRow from './SongRow';
// import TrendingSignIn from './TrendingSignIn';
// import TrendingTitle from './TrendingTitle';

import './stylesheets/Trending.css';

function Trending() {
  return (
    // <div className="trending-container">
    //   <div className="trending-title">
    //     <p> Hear what's trending for free in the SoundTrack Community </p>
    //   </div>
    //   <div className="song-row-container">
    //     <SongRow />
    //   </div>
    //   <div className="trending-signin">
    //     <NavLink to="/signin">
    //       <button className="signin-button"> Explore Trending Tracks </button>
    //     </NavLink>
    //   </div>
    // </div>

    <>
      <Grid templateColumns='repeat(12, 1fr)' templateRows='repeat(10, 1fr)' gap={2}>
        <GridItem rowSpan={6} colSpan={1} />
        <GridItem rowSpan={1} colSpan={2} w='100%' h='20' />
        <GridItem rowSpan={1} colSpan={6} >
          <Center>
            <Text fontSize='xl' mt={6}> Hear what's trending for free in the SoundTrack Community </Text>
          </Center>
        </GridItem>
        <GridItem rowSpan={1} colSpan={2} w='100%' h='20'  />
        <GridItem rowSpan={6} colSpan={1} />
        <GridItem rowSpan={5} colSpan={10}>
          <SongRow />
        </GridItem>
        <GridItem rowSpan={1} colSpan={5} w='100%' h='20' />
        <GridItem rowSpan={1} colSpan={2} w='100%' h='20'>
          <Center>
            <Button size='md' mt={2} colorScheme='gray'>
              Explore Trending Tracks
            </Button>
          </Center>
        </GridItem>
        <GridItem rowSpan={1} colSpan={5} w='100%' h='20' />
      </Grid>
    </>
  );
}

export default Trending;