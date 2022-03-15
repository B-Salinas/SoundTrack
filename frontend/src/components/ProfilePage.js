import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';


import {
  Divider,
  Grid,
  GridItem,
  Wrap,
  WrapItem,
} from '@chakra-ui/react';

import { getUser } from '../store/user';

import { getSongsFromUser } from '../store/song';
import ProfileHeader from './ProfileHeader';
import MiniSongCard from './MiniSongCard';

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
        <GridItem colSpan={10} >
          {currentProfile &&
            <ProfileHeader currentProfile={currentProfile} />
          }
          <Divider />
        </GridItem>
        <GridItem rowSpan={24} colSpan={1} />
        <GridItem rowSpan={allSongs?.length} colSpan={7} >
          <Wrap>
            {allSongs.length > 0 &&
              allSongs.map((song) => {
                return (
                  <WrapItem key={song.id} >
                    <MiniSongCard song={song} />
                  </WrapItem>
                )
              })}
          </Wrap>
        </GridItem>
        <GridItem rowSpan={8} colSpan={3} bg='green' >
          <Wrap>
            {currentLikes &&
              currentLikes.map((like) => {
                return (
                  <WrapItem key={like.id}>
                    <div>{like.album_title}</div>
                    <div>{like.song_title}</div>
                    <div>{`# likes: ${like.numLikes}`}</div>
                    <div>{`# comments: ${like.numComments}`}</div>
                  </WrapItem>
                )
              })}
          </Wrap>
          <Wrap>
            {currentFollowing &&
              currentFollowing.map((following) => {
                return (
                  <WrapItem key={following.id}>
                    <img src={following.profilePic} alt='' />
                    <div>{following.username}</div>
                    <div>{`# followers: ${following.numFollowers}`}</div>
                  </WrapItem>
                )
              })}
          </Wrap>
          <Wrap>
            {currentComments &&
              currentComments.map((comment) => {
                return (
                  <WrapItem key={comment.id}>
                    <div>{`on ${comment.song_title}`}</div>
                    <div>{new Date(comment.updatedAt).toDateString()}</div>
                    <div>{comment.content}</div>
                  </WrapItem>
                )
              })}
          </Wrap>
        </GridItem>
        <GridItem rowSpan={8} colSpan={3} bg='green' />
      </Grid>
    </>
  )
}

export default ProfilePage;
