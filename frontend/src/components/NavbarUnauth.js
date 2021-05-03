import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';

import { signup, login } from '../store/session';

import '../components/stylesheets/NavbarUnauth.css'

function NavbarUnauth() {
  const dispatch = useDispatch();
  const history = useHistory();

  const handleLogin = () => {
    dispatch(login());
    history.push('/explore');
  }

  const handleSignup = () => {
    dispatch(signup());
    history.push('/explore');
  }

  return (
    <div className="navbar-unauth-links">
      <div className="signin">
        <NavLink to="/signin">
          <button className="signin-button" onClick={handleLogin}> Sign In </button>
        </NavLink>
      </div>
      <div className="register">
        <NavLink to="/register">
          <button className="register-button" onClick={handleSignup}> Create Account </button>
        </NavLink>
      </div>
    </div>
  );
}

export default NavbarUnauth;
