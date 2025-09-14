import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div>
      <div className="task-bar">
        <Link to="/budget" className="task-bar-btn">Budget Estimation</Link>
        <Link to="/holiday-ai" className="task-bar-btn">Holiday AI Recommendations</Link>
        <Link to="/map" className="task-bar-btn">See Map</Link>
      </div>
      <div className="home-page">
        <h1><b>Welcome to  <i>Let's Trip</i> !</b></h1>
      </div>
    </div>
  );
};

export default HomePage;