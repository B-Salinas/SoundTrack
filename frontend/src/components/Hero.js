import { NavLink } from 'react-router-dom';

import './stylesheets/Hero.css';

function Hero() {
  return (
    <div className="hero-container">
      <div className="hero-title">
        <p> What's next in movies is first on SoundTrack </p>
      </div>
      <div className="hero-text">
        <p> Upload your first track and begin your journey. SoundTrack gives you the space to create, find your friends, and connect with other composers. </p>
      </div>
      <div className="hero-register">
        <NavLink to='/register'>
          <button className="register-button"> Start Uploading Today </button>
        </NavLink>
      </div>
    </div>
  );
}

export default Hero;