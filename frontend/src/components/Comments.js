import React from 'react';
import { useSelector } from 'react-redux';


import {
  Avatar,
  Box,
} from '@chakra-ui/react';

function Comments({comment}) {
  const sessionUser = useSelector(state => state.session.user);
  const comments = useSelector(state => state.songs.currentSong?.Comments);

  // key = { comment.id }
  return (
    <>
      <Box maxW='xl'>
        <Box>
          <Avatar size='md' src={sessionUser.profilePic} name={sessionUser.username} />
        </Box>
        <Box>
          <Box>
            <Box>
              {/* {comment.User.username} */}
              Username goes here
            </Box>
            <Box>
              {/* {new Date(comment.updatedAt).toDateString()} */}
              Date and Time goes here
            </Box>
          </Box>
          <Box>
            {/* {comment.content} */}
            Comment goes here
          </Box>
        </Box>
      </Box>
    </>
  )
}

export default Comments;