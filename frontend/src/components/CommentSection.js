import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  Avatar,
  Box,
  FormControl,
  Input,
  Stack
} from '@chakra-ui/react';

import Comments from './Comments';

import { postComment, deleteComment } from '../store/song';


function CommentSection({comment}) {
  const dispatch = useDispatch();
  const sessionUser = useSelector(state => state.session.user);
  const userId = useSelector(state => state.session.user?.id);
  const songId = useSelector(state => state.songs.currentSong?.id);
  const comments = useSelector(state => state.songs.currentSong?.Comments);
  const [content, setContent] = useState('');

  const handleSubmit = async () => {
    console.log('heeeeerrreee')
    await dispatch(postComment(userId, songId, content));
    setContent('');
  }

  const handleDelete = async (commentId) => {
    await dispatch(deleteComment(userId, commentId));
  }

  return (
    <>
      <Box>
        <FormControl>
          <Input
            placeholder='Add a comment...'
            variant='outline'
            value={content}
            onChange={(e) => setContent(e.target.value)}
            onKeyPress={(e) => {
              if (e.key === 'Enter') {
                handleSubmit();
              }
            }}
          />
        </FormControl>
        <Stack >
          {comments.map((comment) => {
              return (
                <>
                  <Box>
                    <Comments comments={comment} />
                  </Box>
                </>
              )
            })
          }
        </Stack>
      </Box>
    </>
  )
}

export default CommentSection;