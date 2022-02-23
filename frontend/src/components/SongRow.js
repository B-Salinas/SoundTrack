import React from 'react';

import { 
  Box,
  Image,
  SimpleGrid
 } from '@chakra-ui/react'

import './stylesheets/SongCollection.css';

function SongRow() {
  return (
    // <div className="song-card-row">
    //   <div className="song-card-container">
    //     <div className="song-image-container">
    //       <img className="song-image" alt="test" src="https://res.cloudinary.com/soundtrack-2/image/upload/v1619985016/images/legend-of-korra_hmlauy.jpg" height="300px" width="inherit"></img>
    //     </div>
    //     <div className="song-info-container">
    //       <p className="song-title"> Service and Sacrifice </p>
    //       <p className="song-album"> The Legend Of Korra </p>
    //     </div>
    //     <div className="song-audio-container">
    //       <audio controls className="song-audio" src={"https://res.cloudinary.com/soundtrack-2/video/upload/v1619803505/audio/service-and-sacrifice_w9xrfh.mp3"}>
    //         <source></source>
    //       </audio>
    //     </div>
    //   </div>
    //   <div className="song-card-container">
    //     <div className="song-image-container">
    //       <img className="song-image" alt="test" src="https://res.cloudinary.com/soundtrack-2/image/upload/v1619985027/images/star-wars-revenge-of-the-sith_solvex.jpg" height="300px" width="inherit"></img>
    //     </div>
    //     <div className="song-info-container">
    //       <p className="song-title"> Battle of the Heros </p>
    //       <p className="song-album"> Star Wars: Revenge of the Sith </p>
    //     </div>
    //     <div className="song-audio-container">
    //       <audio controls className="song-audio" src={"https://res.cloudinary.com/soundtrack-2/video/upload/v1619803931/audio/battle-of-the-heros_sgt5iu.mp3"}>
    //         <source></source>
    //       </audio>
    //     </div>
    //   </div>
    //   <div className="song-card-container">
    //     <div className="song-image-container">
    //       <img className="song-image" alt="test" src="https://res.cloudinary.com/soundtrack-2/image/upload/v1619801657/images/black-panther_aobbc3.jpg" height="300px" width="inherit"></img>
    //     </div>
    //     <div className="song-info-container">
    //       <p className="song-title"> All The Stars </p>
    //       <p className="song-album"> Black Panther </p>
    //     </div>
    //     <div className="song-audio-container">
    //       <audio controls className="song-audio" src={"https://res.cloudinary.com/soundtrack-2/video/upload/v1619802016/audio/all-the-stars_uuiuxz.mp3"}>
    //         <source></source>
    //       </audio>
    //     </div>
    //   </div>
    //   <div className="song-card-container">
    //     <div className="song-image-container">
    //       <img className="song-image" alt="test" src="https://res.cloudinary.com/soundtrack-2/image/upload/v1619801658/images/someone-great_ukdnlh.jpg" height="300px" width="inherit"></img>
    //     </div>
    //     <div className="song-info-container">
    //       <p className="song-title"> Dreaming of You </p>
    //       <p className="song-album"> Someone Great </p>
    //     </div>
    //     <div className="song-audio-container">
    //       <audio controls className="song-audio" src={"https://res.cloudinary.com/soundtrack-2/video/upload/v1619803511/audio/dreaming-of-you_tmyfkk.mp3"}>
    //         <source></source>
    //       </audio>
    //     </div>
    //   </div>
    // </div>
    <> 
      <SimpleGrid maxW='auto' h='auto' columns={4} spacing={2}>
        <Box maxW='xs' borderWidth='1px' borderRadius='lg' overflow='hidden'>
          <Image w='100%' h='100%' src='https://res.cloudinary.com/soundtrack-2/image/upload/v1619985016/images/legend-of-korra_hmlauy.jpg' alt='Service and Sacrifice' />
          <Box p='6'>
            <Box display='flex' alignItems='baseline'>
              <Box color='gray.500' fontWeight='semibold' letterSpacing='wide' fontSize='xs' textTransform='uppercase'>
                The Legend of Korra
              </Box>
            </Box>
            <Box mt='1' fontWeight='semibold' as='h4' lineHeight='tight'>
              Service and Sacrifice
            </Box>
            <Box display='flex' mt='2' alignItems='center'>
              <audio controls src={"https://res.cloudinary.com/soundtrack-2/video/upload/v1619803505/audio/service-and-sacrifice_w9xrfh.mp3"}>
                <source></source>
              </audio>
            </Box>
          </Box>
        </Box>

        <Box maxW='xs' borderWidth='1px' borderRadius='lg' overflow='hidden'>
          <Image w='100%' h='100%' src='https://res.cloudinary.com/soundtrack-2/image/upload/v1619985027/images/star-wars-revenge-of-the-sith_solvex.jpg' alt='Battle of the Heros' />
          <Box p='6'>
            <Box display='flex' alignItems='baseline'>
              <Box color='gray.500' fontWeight='semibold' letterSpacing='wide' fontSize='xs' textTransform='uppercase'>
                Star Wars
              </Box>
            </Box>
            <Box mt='1' fontWeight='semibold' as='h4' lineHeight='tight'>
              Battle of the Heros
            </Box>
            <Box display='flex' mt='2' alignItems='center'>
              <audio controls src={"https://res.cloudinary.com/soundtrack-2/video/upload/v1619803931/audio/battle-of-the-heros_sgt5iu.mp3"}>
                <source></source>
              </audio>
            </Box>
          </Box>
        </Box>
        
        <Box maxW='xs' borderWidth='1px' borderRadius='lg' overflow='hidden'>
          <Image w='100%' h='100%' src='https://res.cloudinary.com/soundtrack-2/image/upload/v1619801657/images/black-panther_aobbc3.jpg' alt='All The Stars' />
          <Box p='6'>
            <Box display='flex' alignItems='baseline'>
              <Box color='gray.500' fontWeight='semibold' letterSpacing='wide' fontSize='xs' textTransform='uppercase'>
                Black Panther
              </Box>
            </Box>
            <Box mt='1' fontWeight='semibold' as='h4' lineHeight='tight'>
              All The Stars
            </Box>
            <Box display='flex' mt='2' alignItems='center'>
              <audio controls src={"https://res.cloudinary.com/soundtrack-2/video/upload/v1619802016/audio/all-the-stars_uuiuxz.mp3"}>
                <source></source>
              </audio>
            </Box>
          </Box>
        </Box>
        
        <Box maxW='xs' borderWidth='1px' borderRadius='lg' overflow='hidden'>
          <Image w='100%' h='100%' src='https://res.cloudinary.com/soundtrack-2/image/upload/v1619801658/images/someone-great_ukdnlh.jpg' alt='Dreaming Of You' />
          <Box p='6'>
            <Box display='flex' alignItems='baseline'>
              <Box color='gray.500' fontWeight='semibold' letterSpacing='wide' fontSize='xs' textTransform='uppercase'>
                Someone Great
              </Box>
            </Box>
            <Box mt='1' fontWeight='semibold' as='h4' lineHeight='tight'>
              Dreaming of You
            </Box>
            <Box display='flex' mt='2' alignItems='center'>
              <audio controls src={"https://res.cloudinary.com/soundtrack-2/video/upload/v1619803511/audio/dreaming-of-you_tmyfkk.mp3"}>
                <source></source>
              </audio>
            </Box>
          </Box>
        </Box>

      </SimpleGrid>
      


      
    </>
  )
};

export default SongRow;