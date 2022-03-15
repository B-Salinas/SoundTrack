import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  Box,
  FormControl,
  FormLabel,
  Input,
  SimpleGrid,
} from '@chakra-ui/react';

import Comments from './Comments';
import { postComment, deleteComment } from '../store/song';


function CommentSection() {
  const dispatch = useDispatch();
  const userId = useSelector(state => state.session.user?.id);
  const songId = useSelector(state => state.songs.currentSong?.id);
  const comments = useSelector(state => state.songs.currentSong?.Comments);
  const [content, setContent] = useState('');

  const handleSubmit = async () => {
    await dispatch(postComment(userId, songId, content));
    setContent('');
  }

  const handleDelete = async (commentId) => {
    await dispatch(deleteComment(userId, commentId));
  }

  return (
    <>
      <Box p={6} >
        <Box>
          <FormControl>
            <FormLabel> {comments?.length} Comments </FormLabel>
            <Input
              borderWidth='2px'
              borderRadius='2xl'
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
        </Box>
        <Box>
          <SimpleGrid columns={1}  >
            {comments.length > 0 &&
              comments.map((comment) => {
                return (
                  <>
                    <Box p={2}>
                      <Comments comment={comment} />
                    </Box>
                  </>
                )
              })}
          </SimpleGrid>
        </Box>
      </Box>
    </>
  )
}

export default CommentSection;
