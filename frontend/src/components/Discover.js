import './stylesheets/Discover.css';
import Navbar from './Navbar';

function Discover() {
  return (
    <>
    <Navbar />
      <div className="discover-container">
        <div className="hero-container">
          <div className="hero-carousel">
            <div className="hero-text">
              <h2>What's next in movies is first on SoundTrack</h2>
              <p>
                Upload your first track and begin your journey. SoundTrack gives you space to create, find your fans, and connect with other composers.
              </p>
              
            </div>
           
          </div>
        </div>
      </div>
    </>
  );
}

export default Discover;