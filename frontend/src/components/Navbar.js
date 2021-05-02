import { useSelector } from 'react-redux';

import NavbarAuth from './NavbarAuth';
import NavbarUnauth from './NavbarUnauth';

import './stylesheets/Navbar.css';

function Navbar() {
  const sessionUser = useSelector(state => state.session.user);

  return (
    <div className="navbar-container">
      <div className="navbar-logo">
        <i className="fab fa-soundcloud" />
      </div>
      <div className="navbar-title">
        <h3>SOUNDTRACK</h3>
      </div>
      <div className="navbar-links">
        {sessionUser ? <NavbarAuth /> : <NavbarUnauth />}
      </div>
    </div>
  );
};

export default Navbar;

