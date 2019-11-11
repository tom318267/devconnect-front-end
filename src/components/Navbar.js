import React from 'react';
import { Link } from 'react-router-dom';
import '../styles.css';

class Navbar extends React.Component {
  render() {
    return (
      <div className="Navbar">
        <nav className="navbar navbar-expand-lg navbar-light">
          <Link className="navbar-brand" to="/"><i class="fas fa-code"></i> DevConnect</Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>
              <li className="nav-item">
                <Link className="nav-link" to="/">Developers</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/register">Register</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/login">Login</Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    )
  }

}

export default Navbar;
