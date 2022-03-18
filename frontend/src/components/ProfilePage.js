import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import {
  Box,
  Container,
  Divider,
  Grid,
  GridItem,
  Heading,
  Wrap,
  WrapItem,
} from '@chakra-ui/react';

import { getUser } from '../store/user';

import { getSongsFromUser } from '../store/song';
import ProfileHeader from './ProfileHeader';
import MiniSongCard from './MiniSongCard';

import LikesOnProfile from './LikesOnProfile';
import FollowingOnProfile from './FollowingOnProfile';
import CommentsOnProfile from './CommentsOnProfile';

function ProfilePage() {
  const { username } = useParams();
  const dispatch = useDispatch();
  const currentProfile = useSelector(state => state.users.userProfile);
  const currentLikes = useSelector(state => state.users.userProfile?.likedSongs);
  const currentFollowing = useSelector(state => state.users.userProfile?.usersFollowing);
  const currentComments = useSelector(state => state.users.userProfile?.Comments);
  const currentUserId = useSelector(state => state.users.userProfile?.id);
  const allSongs = useSelector(state => state.songs.allSongs);

  useEffect(() => {
    (async () => {
      await dispatch(getUser({ username }));
      if (currentUserId) {
        await dispatch(getSongsFromUser(currentUserId));
      }
    })();
  }, [dispatch, username, currentUserId]);

  return (
    <>
      <Grid templateColumns='repeat(12, 1fr)' gap={2}>
        <GridItem rowSpan={24} colSpan={1} />
        <GridItem colSpan={10}>
          {currentProfile &&
            <ProfileHeader currentProfile={currentProfile} />
          }
          <Divider />
        </GridItem>
        <GridItem rowSpan={24} colSpan={1} />
        <GridItem rowSpan={allSongs?.length > 8 ? allSongs?.length : 8} colSpan={6} >
          <Container maxW='container.md'>
            <Box p={2}>
              <Heading> {allSongs?.length} Songs </Heading>
            </Box>
            <Wrap >
              {allSongs.length > 0 &&
                allSongs.map((song) => {
                  return (
                    <WrapItem key={song.id} >
                      <MiniSongCard song={song} />
                    </WrapItem>
                  )
                })}
            </Wrap>
          </Container>
        </GridItem>
        <GridItem rowSpan={1} colSpan={4} >
          <Box>
            <Heading p={2}> {currentFollowing?.length} Following </Heading>
          </Box>
          <Box overflowY='scroll' borderWidth='1px'>
            {currentFollowing &&
              currentFollowing.map((following) => {
                return (
                  <FollowingOnProfile following={following} />
                )
              })}
          </Box>
        </GridItem>
        <GridItem rowSpan={2} colSpan={4}>
          <Divider />
            <Box>
              <Heading> {currentLikes?.length} Likes </Heading>
            </Box>
          <Box maxH='xs' overflowY='scroll' borderWidth='1px'>
            {currentLikes &&
              currentLikes.map((like) => {
                return (
                  <LikesOnProfile like={like} />
                )
              })}
            </Box>
        </GridItem>
        <GridItem rowSpan={4} colSpan={4} >
            <Divider />
            <Box>
              <Heading p={2}> {currentComments?.length} Comments </Heading>
            </Box>
            <Box maxH='md' overflowY='scroll' borderWidth='1px'> 
            {currentComments &&
              currentComments.map((comment) => {
                return (
                  <>
                    <CommentsOnProfile comment={comment} />
                  </>
                )
              })}
            </Box>
        </GridItem>
      </Grid>
    </>
  )
}

export default ProfilePage;
