import './stylesheets/Trending.css';

import { NavLink } from 'react-router-dom';

function TrendingSignIn() {
  return (
    <div className="trending-signin">
      <NavLink to="/signin">
        <button className="signin-button"> Explore Trending Tracks </button>
      </NavLink>
    </div>
  )
};

export default TrendingSignIn;