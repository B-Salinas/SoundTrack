import { NavLink } from 'react-router-dom';

import '../components/stylesheets/NavbarUnauth.css'

function NavbarUnauth() {
  return (
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
}

export default NavbarUnauth;
