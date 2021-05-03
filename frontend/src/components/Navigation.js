import './stylesheets/Navigation.css';

import React from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
// import ProfileButton from './ProfileButton';

import { logout } from '../store/session';

// import Navbar from './Navbar';
// import Footer from './Footer';

function Navigation({ isLoaded }) {
  const sessionUser = useSelector(state => state.session.user);
  const dispatch = useDispatch();
  const history = useHistory();

  const handleLogout = () => {
    dispatch(logout());
    history.push('/login');
  }

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <div className="navbar-unauth-links">
        <div className="signin">
          <NavLink to="/signin">
            <button className="signin-button"> Sign In </button>
          </NavLink>
        </div>
        <div className="register">
          <NavLink to="/register">
            <button className="register-button"> Create Account </button>
          </NavLink>
        </div>
      </div>
    );
  } else {
    sessionLinks = (
      <div className="navbar-auth-links">
        <div className="upload">
          <NavLink to='/upload'>
            <button className="upload-button"> Upload </button>
          </NavLink>
        </div>
        <div className="logout">
          <NavLink to="/logout">
            <button className="logout-button" onClick={handleLogout}> Log Out </button>
          </NavLink>
        </div>
      </div>
    );
  }

  return (
    <div className="navbar-container">
      <div className="navbar-logo">
        <i className="fab fa-soundcloud" />
      </div>
      <div className="navbar-title">
        <h3>SOUNDTRACK</h3>
      </div>
      {isLoaded && sessionLinks}
    </div>
  );
}

export default Navigation;