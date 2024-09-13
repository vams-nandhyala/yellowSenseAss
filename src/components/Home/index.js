import Navbar from '../Navbar'
import {Link} from 'react-router-dom'

import './index.css'

const Home = () => {
 
  return (
    <>
      <Navbar />
      <div className="home-container">
        <div className="home-content">
          <h1 className="home-heading">Don't Stop Until You're Proud</h1>
          <img
            src="https://qph.cf2.quoracdn.net/main-qimg-560d4d884c2d848c0b8f0b3b4a854114-pjlq"
            alt="clothes that get you noticed"
            className="home-mobile-img"
          />
          <p className="home-description">
            Believe in yourself and your abilities. The right opportunity is just around the corner!
          </p>
          <Link to="/jobs">
            <button type="button" className="search-jobs-now-button">
              Search for Jobs
            </button>
          </Link>
        </div>
        <img
          src="https://theincap.com/wp-content/uploads/2022/04/Uniforms02-1024x684-1.jpg"
          alt="clothes that get you noticed"
          className="home-desktop-img"
        />
      </div>
    </>
  )
}

export default Home