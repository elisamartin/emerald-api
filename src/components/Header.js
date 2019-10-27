import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <div>
        <NavLink to='/'>
          <img src='https://emeraldstay.com/assets/svg/icon-logo-sm.svg' alt='Home' height='55' />
        </NavLink>
        <div className='company-nav'>
          <NavLink to='/coming-soon'>OUR PHILOSOPHY</NavLink>
          <NavLink to='/coming-soon'>DESTINATIONS</NavLink>
          <NavLink to='/coming-soon'>CORPORATE EVENTS</NavLink>
          <NavLink to='/coming-soon'>E-LIFEMAG</NavLink>
        </div>
        <div className='user-nav'>
          <NavLink to='/coming-soon'>LOGIN</NavLink>
          <NavLink to='/coming-soon'>CONTACT US</NavLink>
        </div>
      </div>
    );
  }
}

export default Header;
