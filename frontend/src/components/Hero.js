import React from 'react';
// import { NavLink } from 'react-router-dom';

import {
  Button,
  Center,
  Grid, 
  GridItem,
  Text
} from '@chakra-ui/react'

import './stylesheets/Hero.css';

function Hero() {
  return (
    // <div className="hero-container">
    //   <div className="hero-title">
    //     <p> What's next in movies is first on SoundTrack </p>
    //   </div>
    //   <div className="hero-text">
    //     <p> Upload your first track and begin your journey. SoundTrack gives you the space to create, find your friends, and connect with other composers. </p>
    //   </div>
    //   <div className="hero-register">
    //     <NavLink to='/register'>
    //       <button className="register-button"> Start Uploading Today </button>
    //     </NavLink>
    //   </div>
    // </div>
    <>
      <Grid templateColumns='repeat(12, 5fr)' templateRows='repeat(5, 1fr)' gap={2}>
        <GridItem rowSpan={5} colSpan={1} />
        <GridItem rowSpan={1} colSpan={10} />
        <GridItem rowSpan={5} colSpan={1}  />
        <GridItem rowSpan={1} colSpan={2} />

        <GridItem rowSpan={1} colSpan={6}>
          <Center>
            <Text fontSize='3xl' mt={6}> What's next in movies is first on SoundTrack </Text>
          </Center>
        </GridItem>
        <GridItem rowSpan={1} colSpan={2} />
        <GridItem rowSpan={1} colSpan={2} />
        <GridItem rowSpan={1} colSpan={6}> 
          <Center>
            <Text align='center'>  Upload your first track and begin your journey. SoundTrack gives you the space to create, find your friends, and connect with other composers. </Text>
          </Center>
        </GridItem>
        <GridItem rowSpan={1} colSpan={2} />
        <GridItem rowSpan={1} colSpan={4} />
        <GridItem rowSpan={1} colSpan={2}>
          <Center>
            <Button size='md' mt={2} colorScheme='orange'>
              Create an Account
            </Button>
          </Center>
        </GridItem>
        <GridItem rowSpan={1} colSpan={4} />
        <GridItem rowSpan={1} colSpan={10} />
      </Grid>
    </>
  );
}

export default Hero;