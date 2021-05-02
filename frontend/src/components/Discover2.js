import Hero from './Hero';
import Trending from './Trending'
import AltSignIn from './AltSignIn'


import './stylesheets/Discover2.css';

function Discover2() {
  return (
    <div className="discover-container">
      <Hero />
      <hr />
      <Trending />
      <hr/>
      <AltSignIn />
    </div>
  )
};

export default Discover2;