import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import {
    Container,
    HStack,
} from '@chakra-ui/react'

import ExtendedSongCard from './ExtendedSongCard';
import { getFeaturedSongs } from '../store/song';

function SongPage() {
  const { username, album, song_title } = useParams();
  const dispatch = useDispatch();
  const featuredSongs = useSelector(state => state.songs.featuredSongs);
  console.log(username, album, song_title);

  useEffect(() => {
    dispatch(getFeaturedSongs());
  }, [dispatch]);

    return (
      <>
        Hello!!!!!!!
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