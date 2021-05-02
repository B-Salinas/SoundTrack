import { NavLink } from 'react-router-dom';


import './stylesheets/Trending.css';

function Trending() {
  return (
    <div className="trending-container">
      <div className="trending-title">
        <p> Hear what's trending for free in the SoundTrack Community </p>
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