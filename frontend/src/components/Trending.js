import { NavLink } from 'react-router-dom';

import SongRow from './SongRow';
import TrendingSignIn from './TrendingSignIn';
import TrendingTitle from './TrendingTitle';

import './stylesheets/Trending.css';

function Trending() {
  return (
    <div className="trending-container">
      <div className="trending-title">
        <p> Hear what's trending for free in the SoundTrack Community </p>
      </div>
      <div className="song-row-container">
        <SongRow />
      </div>
      <div className="trending-signin">
        <NavLink to="/signin">
          <button className="signin-button"> Explore Trending Tracks </button>
        </NavLink>
      </div>
    </div>
  );
}

export default Trending;