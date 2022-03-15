import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  Grid,
  GridItem,
  Wrap,
  WrapItem
} from '@chakra-ui/react'

import { getSongs } from '../store/song';

import SongCard from './SongCard';

function Explore() {
  const dispatch = useDispatch();
  const allSongs = useSelector(state => state.songs.allSongs);

  useEffect(() => {
    dispatch(getSongs());
  }, [dispatch]);

  return (
    <>
      <Grid templateColumns='repeat(12, 1fr)' gap={2}>
        <GridItem rowSpan={12} colSpan={1} />
        <GridItem rowSpan={1} colSpan={10} w='100%' h='10' />
        <GridItem rowSpan={12} colSpan={1} />
        <GridItem rowSpan={10} colSpan={10} >
          <Wrap justify='center'>
            {allSongs.length > 0 &&
              allSongs.map((song) => {
                return (
                  <WrapItem key={song.id} maxW='xs'>
                    <SongCard song={song} />
                  </WrapItem>
                )
              })
            }
          </Wrap>
        </GridItem>
        <GridItem rowSpan={1} colSpan={10} w='100%' h='10' />
      </Grid>
    </>
  )
}

export default Explore;
