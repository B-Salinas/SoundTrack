import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  Box,
  Divider,
  Grid,
  GridItem
} from '@chakra-ui/react';

import { getSongs } from '../store/song';
import ProfileHeader from './ProfileHeader';
import MiniSongCard from './MiniSongCard';

function ProfilePage() {
  const dispatch = useDispatch();
  const allSongs = useSelector(state => state.songs.allSongs);

  useEffect(() => {
    dispatch(getSongs())
  }, [dispatch]);

  return (
    <>
      <Grid templateColumns='repeat(12, 1fr)' templateRows='repeat(48, 1fr)' gap={2}>
        <GridItem rowSpan={24} colSpan={1} bg='red'/>
        <GridItem rowSpan={8} colSpan={10}>
          <ProfileHeader />
          <Divider />
        </GridItem>
        <GridItem rowSpan={24} colSpan={1} bg='red'/>
        <GridItem rowSpan={16} colSpan={7} >
          <Box borderWidth='2px' borderRadius='xl'>
            <MiniSongCard />
          </Box>
        </GridItem>
        <GridItem rowSpan={8} colSpan={3} bg='green' />
        <GridItem rowSpan={8} colSpan={3} bg='green' />
      </Grid>
    </>
  )
}

export default ProfilePage;

