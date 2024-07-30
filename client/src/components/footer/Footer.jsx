import React from 'react';
import './Footer.scss';

function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <div className="bottom">
          <div className="left">
            <h2>2024 Donate for a Cause. All rights reserved</h2>
          </div>
          <div className="right">
            <div className="social">
              <img src="/img/twitter.png" alt="" />
              <img src="/img/facebook.png" alt="" />
              <img src="/img/linkedin.png" alt="" />
              <img src="/img/instagram.png" alt="" />
            </div>

            <div className="link">
              <span>India</span>
            </div>
            <img src="/img/accessibility.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
