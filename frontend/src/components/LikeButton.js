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

    const UNLIKED_COLOR = 'black.500';
    const LIKED_COLOR = 'red.500';

    const dispatch = useDispatch();
    const userId = useSelector(state => state.session.user?.id);
    const isLiked = useSelector(state => state.session.user?.Likes.find(like => like.song_id === songId));

    const [like, setLike] = useState(isLiked ? LIKED_COLOR : UNLIKED_COLOR);
    const [numLikes, setNumLikes] = useState(null);

    useEffect(() => {
        (async () => {
            const likes = await dispatch(getLikes(songId));

            setNumLikes(likes);
        })();
    }, [dispatch, songId]);

    const handleLike = async () => {
        if (like === LIKED_COLOR) {
            await dispatch(unlikeSong(userId, songId));
        } else {
            await dispatch(likeSong(userId, songId));
        }
        const likes = await dispatch(getLikes(songId));

        setNumLikes(likes);
        setLike(like === LIKED_COLOR ? UNLIKED_COLOR : LIKED_COLOR);
    }

    return (
        <>
            <HStack>
                <IconButton
                    icon={<FaHeart />}
                    isRound
                    size='sm'
                    color={userId ? like : UNLIKED_COLOR}
                    fontSize='15px'
                    onClick={handleLike}
                />
                <Box color={userId ? like : UNLIKED_COLOR}>
                    {numLikes}
                </Box>
            </HStack>
        </>
    )
}

export default LikeButton;
