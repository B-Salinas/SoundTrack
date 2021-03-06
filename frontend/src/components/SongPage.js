import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import {
  Avatar,
  Box,
  Divider,
  Grid,
  GridItem,
  Link,
} from '@chakra-ui/react'

import { getSong } from '../store/song';
import { getUser } from '../store/user';
import ExtendedSongCard from './ExtendedSongCard';
import CommentSection from './CommentSection';
import ProfileCard from './ProfileCard';

function SongPage() {
  const dispatch = useDispatch();
  const userAlbums = useSelector(state => state.users.userProfile?.Albums);
  const currentSong = useSelector(state => state.songs.currentSong);
  const userData = useSelector(state => state.users.userProfile);
  
  const { username, album, song_title } = useParams();

  useEffect(() => {
    (async () => {
      if (!username) {
        // REMOVE THIS BLOCK AFTER TESTING
        if (!userAlbums) {
          await dispatch(getUser({ username: 'Zuckerman-J' }));
        } else {
          await dispatch(getSong({ songTitle: 'Red Lotus Theme', albumId: 13 }));
        }
      } else {
        // KEEP THIS BLOCK AFTER TESTING
        if (!userAlbums) {
          await dispatch(getUser({ username }));
        } else {
          const userAlbum = userAlbums?.find((ele) => ele.album_title === album);

          await dispatch(getSong({ songTitle: song_title, albumId: userAlbum?.id }));
        }
      }
    })();
  }, [dispatch, username, album, song_title, userAlbums]);

  return (
    <>
      <Grid templateColumns='repeat(12, 1fr)' gap={2}>
        <GridItem rowSpan={12} colSpan={1} />
        <GridItem rowSpan={6} colSpan={10} >
          {/* this is to make sure "currentSong" is loaded before passing it in "ExtendedSongCard" */}
          {currentSong &&
            <ExtendedSongCard song={currentSong} />
          }
          <Divider />
        </GridItem>
        <GridItem rowSpan={12} colSpan={1}  />
        <GridItem rowSpan={3} colSpan={2} >
          <ProfileCard userData={userData} />
        </GridItem>
        <GridItem rowSpan={10} colSpan={8} bg='gray.100'>
          {currentSong &&
            <CommentSection />
          }
        </GridItem>
      </Grid>
    </>
  )
}

export default SongPage;
