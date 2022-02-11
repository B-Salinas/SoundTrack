import { NavLink } from 'react-router-dom';

import { useHistory } from 'react-router-dom';


function AltSignIn() {
  const history = useHistory();
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
        <button onClick={() => { history.push('/login') }} className="alt-signin-button"> Log In </button>
      </div>
    </div>
  );

};

export default AltSignIn;