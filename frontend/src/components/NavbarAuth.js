import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';

import { logout } from '../store/session';

import './stylesheets/NavbarAuth.css';

function NavbarAuth() {
  const dispatch = useDispatch();
  const history = useHistory();

  const handleLogout = () => {
    dispatch(logout());
    history.push('/login');
  }
  
  return (
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

export default NavbarAuth;