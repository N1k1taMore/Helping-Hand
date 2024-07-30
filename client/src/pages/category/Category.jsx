import React from 'react';
import './Category.scss';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home-page">
      <img src="/img/image6.jpg" alt="" className="Image" />
      <div className="button-container">
        <button className="btn">
          <span className="btn-text-one">
            <Link className="link" to="/donate">
              Donor
            </Link>
          </span>
          <span className="btn-text-two">
            <Link className="link" to="/donate">
              Thank You !
            </Link>
          </span>
        </button>
        <button className="btn">
          <span className="btn-text-one">
            <Link className="link" to="/alldonation">
              NGO
            </Link>
          </span>
          <span className="btn-text-two">
            {' '}
            <Link className="link" to="/alldonation">
              Thank You !
            </Link>
          </span>
        </button>
      </div>
    </div>
  );
};

export default Home;
