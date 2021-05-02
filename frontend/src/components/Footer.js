import { NavLink, Link } from 'react-router-dom';

import './stylesheets/Footer.css';

function Footer() {
  // return (
  //   <div className="footer">
  //     <div className="github">
  //       <a href="https://github.com/B-Salinas/SoundTrack">
  //         <i className="fab fa-github"/> 
  //       </a>
  //       <div className="github-text">Check out our work on Github!</div>
  //     </div>
  //     <div className="copyright">
  //       © 2021
  //     </div>
      
  //   </div>
  // )

  return (
    <div className="footer-container">
      <div className="project-links">
        <div className="github">
          <a href="https://github.com/B-Salinas/SoundTrack">
            <i class="fab fa-github"></i>
          </a>
        </div>
        <div className="linkedin">
          <a href="https://www.linkedin.com/in/b-salinas/">
            <i class="fab fa-linkedin"></i>
          </a>
        </div>
      </div>
      <div className="copyright"> 
        © 2021 SoundTrack
      </div>
    </div>
  )
}

export default Footer;