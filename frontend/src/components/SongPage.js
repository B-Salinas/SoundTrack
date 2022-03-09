import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { 
  Grid, 
  GridItem 
} from '@chakra-ui/react'

import { getFeaturedSongs } from '../store/song';
import ExtendedSongCard from './ExtendedSongCard';

function SongPage() {
  const { username, album, song_title } = useParams();
  const dispatch = useDispatch();
  // const featuredSongs = useSelector(state => state.songs.featuredSongs);
  console.log(username, album, song_title);

  useEffect(() => {
    dispatch(getFeaturedSongs());
  }, [dispatch]);

    return (
      <>
        <Grid templateColumns='repeat(12, 1fr)' templateRows='repeat(12, 1fr)' gap={2}>
          <GridItem rowSpan={12} colSpan={1} bg='red.500' />
          <GridItem rowSpan={1} colSpan={10} h='20' bg='green.500' />
          <GridItem rowSpan={12} colSpan={1} bg='red.500' />
          <GridItem rowSpan={6} colSpan={10} bg='blue.500'>
            <ExtendedSongCard />
          </GridItem>

        </Grid>
      </>
    )
}

export default SongPage;

// <Container maxW='container.xl' centerContent >
//   <HStack>
//     {featuredSongs &&
//               featuredSongs.map((song) => {
//                 return (
//                   <ExtendedSongCard song={song} key={song.id} />
//                 )
//               })
//             }
//     Hello, we are on the song page!!
//   </HStack>
// </Container>