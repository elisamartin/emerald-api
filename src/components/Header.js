import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <div>
        <NavLink to='/'>HOME</NavLink>
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
