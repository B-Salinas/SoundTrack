import './stylesheets/Discover.css';
import Navbar from './Navbar';
import { NavLink } from 'react-router-dom';

import Footer from './Footer';

function Discover() {
  return (
    <>
    <Navbar />
      <div className="discover-container">
        <div className="main-container">
          <div className="hero-container">
            <div className="hero-title title">
              <p>What's next in movies is first on SoundTrack</p>
            </div>
            <div className="hero-text text">
              <p>
                Upload your first track and begin your journey. SoundTrack gives you space to create, find your fans, and connect with other composers.
              </p>
            </div>
            <div className="signup">
              <NavLink to='/signup'>
                <button className="register-button"> Start Uploading Today </button>
              </NavLink>
            </div>
          </div>
          
          <div className="trending-container">
            <div className="trending-title title">
              <p>Hear what’s trending for free in the SoundTrack community</p>
            </div>
            <div className="trending">
              <NavLink to='/trending'>
                <button className="trending-button"> Explore Trending Playlists </button>
              </NavLink>
            </div>

          </div>

          <div className="final-container">
            <div className="final-title title">
              <p>Thanks for Listening. Now join in.</p>
            </div>
            <div className="final-text text">
              <p>
                Upload your first track and begin your journey. SoundTrack gives you space to create, find your fans, and connect with other composers.
              </p>
            </div>
            <div className="signup">
              <NavLink to='/signup'>
                <button className="register-button"> Create Account </button>
              </NavLink>
            </div>
            <div className="final-auth">
              <p>
                Already have an account?
              </p>
              <NavLink to='/signin'>
                <button className="signin-button"> Sign In </button>
              </NavLink>
            </div>

          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Discover;