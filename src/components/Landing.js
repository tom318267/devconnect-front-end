import React from 'react';
import { Link } from 'react-router-dom';

const Landing = () => {
  return (
    <div className="Landing overlay">
      <div className="landing-header">
        <h1>DevConnect</h1>
        <h4 className="mb-4">Connect with other developers!</h4>
        <div className="btn-toolbar">
          <Link to="/login" className="btn btn-primary btn-lg login">Login</Link>
          <Link to="/register" className="btn btn-primary btn-lg">Sign Up</Link>
        </div>
      </div>
    </div>
  )
}

export default Landing;
