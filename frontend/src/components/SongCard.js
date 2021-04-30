import React from 'react';
import './stylesheets/SongCard.css';

function SongCard({ song, album }) {

  return (
    <> 
      <div className="song-card-container">
        <img className="album-cover" src={song.image_url} alt="" />
        <h3 className="song-title" value={song.id}>{song.song_title}</h3>
        <div className="album-title" value={song.album_id}>{album.album_title}</div>
        <audio controls>
          <source src={song.audio_url}/>
        </audio>
      </div>
    </>
  )
}

export default SongCard;