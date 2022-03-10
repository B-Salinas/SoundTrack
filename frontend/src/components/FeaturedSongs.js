import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  Container,
  HStack,
} from '@chakra-ui/react'

import SongCard from './SongCard';
import { getFeaturedSongs } from '../store/song';

function FeaturedSongs() {
  const dispatch = useDispatch();
  const featuredSongs = useSelector(state => state.songs.featuredSongs);

  useEffect(() => {
    dispatch(getFeaturedSongs());
  }, [dispatch]);

  return (

    <>

      <Container maxW='container.xl' centerContent >
        <HStack>
          {featuredSongs &&
            featuredSongs.map((song) => {
              return (
                <SongCard song={song} key={song.id} />
              )
            })
          }
        </HStack>
      </Container>

    </>
  )
};

export default FeaturedSongs;
