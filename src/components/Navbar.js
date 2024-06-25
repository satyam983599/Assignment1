import React from 'react';
import { Navbar } from 'react-bootstrap';
import { FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import logo from './assets/logo.svg';
import './Navbar.css';

const MyNavbar = () => {
  return (
    <nav className="navbar navbar-expand-lg" style={{ backgroundColor: '#FFFFFF', height: '72px' }}>
      <div className="container-fluid">
        <Navbar.Brand href="#home" className="image">
          <img src={logo} alt="ATG.WORLD Logo" style={{ width: '162.57px', height: '24px', marginLeft: '72px', marginTop: '24px' }} />
        </Navbar.Brand>

        <div className="search-bar">
          <div className="input-group">
            <div className="input-group-prepend">
              <span className="input-group-text" style={{ paddingRight: '20px', paddingTop: '9px' }}>
                <FaSearch className="Fa-icon" />
              </span>
            </div>
            <input type="text" className="form-control" placeholder="Search for your favorite groups in ATG" />
          </div>
        </div>
        <div className="createAccount">
          <p>Create Account.<Link to="/signup"><span style={{ color: 'blue' }}>It's free!</span></Link></p>
        </div>
      </div>
    </nav>
  );
}

export default MyNavbar;
