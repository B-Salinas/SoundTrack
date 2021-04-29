// import { Link } from 'react-router-dom';
import React from 'react';
import './stylesheets/Footer.css';

function Footer() {
  return (
    <div className="footer">
      <div className="github">
        <a href="https://github.com/B-Salinas/SoundTrack">
          <i className="fab fa-github"/> 
        </a>
        <div className="github-text">Check out our work on Github!</div>
      </div>
      <div className="copyright">
        © 2021
      </div>
      
    </div>
  )
}

export default Footer;