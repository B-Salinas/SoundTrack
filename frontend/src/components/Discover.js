import './stylesheets/Discover.css';
import { useHistory } from 'react-router-dom';

import Navbar from './Navbar';
import { NavLink } from 'react-router-dom';

import Hero from './Hero';

function Discover() {
  const history = useHistory();

  return (
    <>
    <Navbar />
      <div className="discover-container">
        <div className="main-container">
          <div className="hero-container">
            <Hero />
          </div>
          
          <div className="trending-container">
            
            <div className="trending">
              <NavLink to='/trending'>
                <button className="trending-button"> does this change anthyijdfdf </button>
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
                <button onClick={() => {history.push('/login')}} className="signin-button"> Log In </button>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}

export default Discover;