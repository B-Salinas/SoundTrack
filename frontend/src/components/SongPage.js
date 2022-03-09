import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import {
  Grid,
  GridItem
} from '@chakra-ui/react'

import { getSong } from '../store/song';
import { getUser } from '../store/user';
import ExtendedSongCard from './ExtendedSongCard';

function SongPage() {
  const dispatch = useDispatch();
  const { username, album, song_title } = useParams();
  const userAlbums = useSelector(state => state.users.userProfile?.Albums);
  // const featuredSongs = useSelector(state => state.songs.featuredSongs);
  console.log(username, album, song_title);

  useEffect(() => {
    (async () => {
      if (!userAlbums) {
        await dispatch(getUser({ username }));
      }

      const userAlbum = userAlbums?.find((ele) => ele.album_title === album);

      await dispatch(getSong({ songTitle: song_title, albumId: userAlbum?.id }));
    })();
  }, [dispatch, username, album, song_title, userAlbums]);

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
