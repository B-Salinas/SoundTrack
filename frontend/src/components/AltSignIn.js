import React from 'react';

import { 
  Center,
  Button,
  Grid, 
  GridItem,
  Text,
 } from '@chakra-ui/react'

// import { NavLink } from 'react-router-dom';

// import { useHistory } from 'react-router-dom';


function AltSignIn() {
  // const history = useHistory();
  return (
    // <div className="alt-container"> 
    //   <div className="alt-info">
    //     <div className="alt-title">
    //       <p> Thanks for listening. Now join in.</p>
    //     </div>
    //     <div className="alt-text">
    //       <p> Get on SoundTrack to connect with friends, share your tracks, and grow your audience. All for free.</p>
    //     </div>
    //   </div>
    //   <div className="alt-register">
    //     <NavLink to="/register">
    //       <button className="alt-register-button"> Create Account </button>
    //     </NavLink>
    //   </div>
    //   <div className="alt-signin">
    //     <p className="alt-signin-text"> Already have an account? </p>
    //     <button onClick={() => { history.push('/login') }} className="alt-signin-button"> Log In </button>
    //   </div>
    // </div>
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
            <Button size='md' mt={2} colorScheme='orange'>
              Create an Account
            </Button>
          </Center>
        </GridItem>
        <GridItem rowSpan={1} colSpan={4} />
        <GridItem rowSpan={1} colSpan={3} />
        <GridItem rowSpan={1} colSpan={2}  >
          <Center>
            <Text mt={4} ml={16} fontSize='xs' align='center'>  Already have an account? </Text>
          </Center>
        </GridItem>
        <GridItem rowSpan={1} colSpan={1}  >
          <Center>
            <Button size='sm' mt={3} colorScheme='black' variant='outline'>
              Log In
            </Button>
          </Center>
        </GridItem>
        <GridItem rowSpan={1} colSpan={4} />
        <GridItem rowSpan={1} colSpan={10} />
      </Grid>
    </>
  );

};

export default AltSignIn;