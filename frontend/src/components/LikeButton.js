import React from 'react';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { IconButton } from '@chakra-ui/react'
import { StarIcon } from '@chakra-ui/icons';

import { likeSong, unlikeSong } from '../store/session';


function LikeButton({ songId }) {

    const dispatch = useDispatch();
    const userId = useSelector(state => state.session.user.id);
    const userLikes = useSelector(state => state.session.user.likes);

    const [ like, setLike ] = useState('black.500');

    useEffect(() => {
        const likedSong = userLikes.find(like => like.song_id === songId);
        if (likedSong) {
            setLike('red.500');
        }
    }, []);

    const handleLike = () => {
        if (like === 'red.500') {
            dispatch(unlikeSong(userId, songId));
            setLike('black.500');
        } else {
            dispatch(likeSong(userId, songId));
            setLike('red.500');
        }
    }

    return (
        <>
            <IconButton color={like} icon={<StarIcon />} onClick={handleLike}>  </IconButton> 
        </>
    )
}

export default LikeButton;