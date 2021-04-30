import './stylesheets/Navbar.css';
import { NavLink } from 'react-router-dom';
import React from 'react';
import { useSelector } from 'react-redux';
// import ProfileButton from './ProfileButton';

function Navbar() {
  const sessionUser = useSelector(state => state.session.user);

  // let sessionLinks;
  // if (sessionUser) {
  //   sessionLinks = (
  //     <ProfileButton user={sessionUser} />
  //   );
  // } else {
  //   sessionLinks = (
  //     <>
  //       <NavLink to="/login">Sign In</NavLink>
  //       <NavLink to="/signup">Create Account</NavLink>
  //     </>
  //   );
  // }
  return (
    <div className="nav-container">
      <div className="nav-logo">
        <NavLink to='/'>
          <i className="fab fa-soundcloud" />
        </NavLink>
      </div>
      <div className="nav-title">
        <NavLink to='/'>
          <h3>SOUNDTRACK</h3>
        </NavLink>
      </div>
      <div className="nav-auth-links">
        {sessionUser ? <NavLink to="/login">Sign In</NavLink> :
        <NavLink to="/signup">Create Account</NavLink>}
        {/* <div className="login">
          <NavLink to='/login'>
            <button className="signin-button"> Sign In </button>
          </NavLink>
        </div>
        <div className="signup">
          <NavLink to='/signup'>
            <button className="register-button"> Create Account </button>
          </NavLink>
        </div> */}
      </div>

    </div>
  )
};

export default Navbar;