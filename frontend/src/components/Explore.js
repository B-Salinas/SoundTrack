import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';


import { 
    Container,
    Grid, 
    GridItem,
    HStack,
    VStack
} from '@chakra-ui/react'

import { getSongs } from '../store/song';
import SongCard from './SongCard';

function Explore() {
    const dispatch = useDispatch();
    const allSongs = useSelector(state => state.songs.allSongs);

    useEffect(() => {
        dispatch(getSongs())
    }, [dispatch]);

    return (
        <>
            <Grid templateColumns='repeat(12, 5fr)' templateRows='repeat(12, 5fr)' gap={2}>
                <GridItem rowSpan={12} colSpan={1} bg='red' />
                <GridItem rowSpan={1} colSpan={10} bg='green' />
                <GridItem rowSpan={12} colSpan={1} bg='red' />
                    {allSongs.length > 0 &&
                        allSongs.map((song) => {
                            return (
                                <>
                                    <GridItem rowSpan={3} colSpan={2} bg='blue'>
                                        <Container maxW='md' bg='green'>
                                            <SongCard song={song} />
                                        </Container> 
                                    </GridItem>
                                </>
                            )
                        })
                    }
                <GridItem rowSpan={1} colSpan={1} bg='green' />
                <GridItem rowSpan={1} colSpan={8} bg='green' />
                <GridItem w='100%' h='20' bg='green' />
            </Grid>
        </>
    )
}

export default Explore;