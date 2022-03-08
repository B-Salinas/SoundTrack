import React from 'react';
// import { NavLink, Link } from 'react-router-dom';

import {
  Box,
  Center,
  Grid,
  GridItem,
  HStack,
  Icon,
  Link,
  Text
} from '@chakra-ui/react'

import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

function Footer() {

  return (
    <>
      <Box bg='gray.100'>
        <Grid templateColumns='repeat(12, 1fr)' gap={2}>
          <GridItem w='100%' h='20' />
          <GridItem w='100%' h='20'>
            <HStack mt={3}>
              <Center>
                <Box p={4}>
                  <Link href='https://github.com/b-salinas' _hover={{ color: 'purple.600' }}>
                    <Icon as={FaGithub} boxSize={6} />
                  </Link>
                </Box>
                <Box p={4}>
                  <Link href='https://linkedin.com/in/b-salinas' _hover={{ color: 'blue.600' }}>
                    <Icon as={FaLinkedinIn} boxSize={6} />
                  </Link>
                </Box>
              </Center>
            </HStack>
          </GridItem>
          <GridItem w='100%' h='20' colSpan={7}/>
          <GridItem w='100%' h='20' colSpan={2}>
            <Center mt={6}>
              <Text> © 2021 SOUNDTRACK </Text>
            </Center>
          </GridItem>
          <GridItem w='100%' h='20' />
        </Grid>
      </Box>
    </>
  )
}

export default Footer;
