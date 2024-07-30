import React from "react";
import "./Home.scss";
import Footer from 'I:/Desktop/Project/Helping/client/src/components/footer/Footer.jsx'

const Home = () => {
  return (
    <>
     <div className="home-page">
          <div className="section1">
            <div className="left-section">
                <span className="title">Together We Can Make a Difference.</span>
                <p>Always give without remembering and always receive without forgetting</p>
            </div>
            <div className="right-section">
                <img src="/img/image5.jpg" alt="Hero" className="main-image" />
            </div>
        </div>
      <div className="image-series">
        <div className="image-card">
        <img src="/img/image4.jpg" alt="" />
        <p className="image-message">Share Love, Inspire Change.</p>
        </div>
        <div className="image-card">
        <img src="/img/image8.jpg" alt="" />
        <p className="image-message">Giving Back, Changing Lives</p>
        </div>
        <div className="image-card">
        <img src="/img/image7.jpg" alt="" />
        <p className="image-message">Join Hands for a Better World.</p>
        </div>
      
      </div>
    </div>
    
     <Footer />
    </>
   
  );
};


export default Home;
