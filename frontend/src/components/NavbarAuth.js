import { NavLink } from 'react-router-dom';
import './stylesheets/NavbarAuth.css';

function NavbarAuth() {
  return (
    <div className="navbar-auth-links">
      <div className="upload">
        <NavLink to='/upload'>
          <button className="upload-button"> Upload </button>
        </NavLink>
      </div>
      <div className="logout">
        <NavLink to="/logout">
          <button className="logout-button"> Log Out </button>
        </NavLink>
      </div>
    </div>
  );
}

export default NavbarAuth;