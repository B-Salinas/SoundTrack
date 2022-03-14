import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  Box,
  FormControl,
  Input
} from '@chakra-ui/react';

import { postComment, deleteComment } from '../store/song';


function CommentSection() {
  const dispatch = useDispatch();
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
            value={content}
            onChange={(e) => setContent(e.target.value)}
            onKeyPress={(e) => {
              if (e.key === 'Enter') {
                handleSubmit();
              }
            }}
          />
        </FormControl>
        {
          comments.map((comment) => {
            return (
              <div key={comment.id}>
                <div>
                  {comment.User.username}
                </div>
                <div>
                  {new Date(comment.updatedAt).toDateString()}
                </div>
                <div>
                  {comment.content}
                </div>
              </div>
            )
          })
        }
      </Box>
    </>
  )
}

export default CommentSection;
