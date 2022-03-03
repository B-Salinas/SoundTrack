import Hero from './Hero';
import Trending from './Trending'
import AltSignIn from './AltSignIn'

function Discover() {
  return (
    <div className="discover-container">
      <div className="main-content-container">
        <Hero />
        <hr />
        <Trending />
        <hr />
        <AltSignIn />
      </div>
    </div>
  )
};

export default Discover;
