import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';

import { signup, login } from '../store/session';

import '../components/stylesheets/NavbarUnauth.css'

function NavbarUnauth() {
  const dispatch = useDispatch();
  const history = useHistory();

  const handleLogin = () => {
    // dispatch(login());

    history.push('/login');
  }

  const handleSignup = () => {
    // dispatch(signup());
    history.push('/signup');
  }

  return (
    <div className="navbar-unauth-links">
      <div className="signin">
        <button className="signin-button" onClick={handleLogin}> Log In </button>
      </div>
      <div className="signup">
        <button className="register-button" onClick={handleSignup}> Create Account </button>
      </div>
    </div>
  );
}

export default NavbarUnauth;
