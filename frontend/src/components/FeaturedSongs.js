import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  Container,
  HStack,
} from '@chakra-ui/react'

import SongCard from './SongCard';
import { getFeaturedSongs } from '../store/song';
import './stylesheets/SongCollection.css';

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
            // example code to display songs dynamically:
            featuredSongs.map((song) => {
              return (
                <SongCard song={song}/>
              )
            })
          }
        </HStack>
      </Container>

    </>
  )
};

export default FeaturedSongs;