import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  Divider,
  Grid,
  GridItem,
  Wrap,
  WrapItem,
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
      <Grid templateColumns='repeat(12, 1fr)' gap={2}>
        <GridItem rowSpan={24} colSpan={1} />
        <GridItem  colSpan={10} >
          <ProfileHeader />
          <Divider />
        </GridItem>
        <GridItem rowSpan={24} colSpan={1} />
        <GridItem rowSpan={16} colSpan={7} >
          <Wrap>
            {allSongs.length > 0 && 
              allSongs.map((song) => {
                return (
                  <>
                    <WrapItem >
                      <MiniSongCard song={song} />
                   </WrapItem>
                  </>
                )
              })}
          </Wrap>
        </GridItem>
        <GridItem rowSpan={8} colSpan={3} bg='green' />
        <GridItem rowSpan={8} colSpan={3} bg='green' />
      </Grid>
    </>
  )
}

export default ProfilePage;

