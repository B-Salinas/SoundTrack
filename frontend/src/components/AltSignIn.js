import { NavLink } from 'react-router-dom';

import './stylesheets/AltSignIn.css'

function AltSignIn() {
  return (
    <div className="alt-container"> 
      <div className="alt-info">
        <div className="alt-title">
          <p> Thanks for listening. Now join in.</p>
        </div>
        <div className="alt-text">
          <p> Get on SoundTrack to connect with friends, share your tracks, and grow your audience. All for free.</p>
        </div>
      </div>
      <div className="alt-register">
        <NavLink to="/register">
          <button className="alt-register-button"> Create Account </button>
        </NavLink>
      </div>
      <div className="alt-signin">
        <p className="alt-signin-text"> Already have an account? </p>
        <NavLink to="/signin"> 
          <button className="alt-signin-button"> Sign In </button>
        </NavLink>
      </div>
    </div>
  );

};

export default AltSignIn;