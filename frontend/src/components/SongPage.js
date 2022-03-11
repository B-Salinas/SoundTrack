import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import {
  Divider,
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
        <GridItem rowSpan={12} colSpan={1} />
        {/* <GridItem rowSpan={1} colSpan={10} bg='green.500' /> */}
        <GridItem rowSpan={6} colSpan={10}>
          <ExtendedSongCard />
          <Divider />
        </GridItem>
        <GridItem rowSpan={12} colSpan={1}  />
        
      </Grid>
    </>
  )
}

export default SongPage;