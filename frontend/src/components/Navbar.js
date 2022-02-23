import React from 'react';
// import { useSelector } from 'react-redux';

import { 
  Box,
  Button,
  Center,
  Grid, 
  GridItem,
  Heading,
  Icon,
 } from '@chakra-ui/react'

import { FaSoundcloud } from 'react-icons/fa';


// import NavbarAuth from './NavbarAuth';
// import NavbarUnauth from './NavbarUnauth';

import './stylesheets/Navbar.css';

function Navbar() {
  // const sessionUser = useSelector(state => state.session.user);
  
 

  return (
    // <div className="navbar-container">
    //   <div className="navbar-logo">
    //     <i className="fab fa-soundcloud" />
    //   </div>
    //   <div className="navbar-title">
    //     <h3>SOUNDTRACK</h3>
    //   </div>
    //   <div className="navbar-links">
    //     {sessionUser ? <NavbarAuth /> : <NavbarUnauth />}
    //   </div>
    // </div>
    <>
    <Box bg='gray.50'> 
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
              <Button size='sm' mt={6} colorScheme='black' variant='outline'>
                Log In
              </Button>
            </Center>
          </GridItem>
          <GridItem w='100%' h='20'>
            <Button size='sm' mt={6} colorScheme={'orange'} >
              Create an Account
            </Button>
          </GridItem>
          <GridItem w='100%' h='20' />
        </Grid>
      </Box> 
    </>
  )
};

export default Navbar;