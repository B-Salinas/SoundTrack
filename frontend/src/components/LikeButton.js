import React from 'react';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { 
    Box, 
    HStack,
    IconButton
} from '@chakra-ui/react'

import { FaHeart } from 'react-icons/fa' 

import { likeSong, unlikeSong } from '../store/session';
import { getLikes } from '../store/song';


function LikeButton({ songId }) {

    const dispatch = useDispatch();
    const userId = useSelector(state => state.session.user?.id);
    const userLikes = useSelector(state => state.session.user?.Likes);

    const [like, setLike] = useState('black.500');
    const [numLikes, setNumLikes] = useState(null);

    useEffect(() => {
        const likedSong = userLikes?.find(like => like.song_id === songId);
        if (likedSong) {
            setLike('red.500');
        }
        (async () => {
            const likes = await dispatch(getLikes(songId));

            setNumLikes(likes);
        })();
    }, [dispatch, songId, userLikes]);

    const handleLike = async () => {
        if (like === 'red.500') {
            await dispatch(unlikeSong(userId, songId));
        } else {
            await dispatch(likeSong(userId, songId));
        }
        const likes = await dispatch(getLikes(songId));

        setNumLikes(likes);
        setLike(like === 'red.500' ? 'black.500' : 'red.500');
    }

    return (
        <>
            <HStack>
                <IconButton 
                    icon={<FaHeart />} 
                    isRound
                    size='sm' 
                    color={like} 
                    fontSize='15px' 
                    onClick={handleLike}  
                />
                <Box color={like}>
                    {numLikes}
                </Box>
            </HStack>
        </>
    )
}

export default LikeButton;
