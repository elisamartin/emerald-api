import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <div>
        <nav>
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
        </nav>
        <div className='selectors'>
          <select name='country'>
            <option value='' selected disabled hidden>
              COUNTRY
            </option>
            <option value='1'>FRANCE</option>
          </select>
          <select name='date'>
            <option value=''>SELECT DATES</option>
          </select>
          <select name='adults'>
            <option value='1'>1 ADULT</option>
            <option value='2'>2 ADULT</option>
            <option value='3'>3 ADULT</option>
            <option value='4'>4 ADULT</option>
            <option value='5'>5 ADULT</option>
            <option value='6'>6 ADULT</option>
            <option value='7'>7 ADULT</option>
            <option value='8'>8 ADULT</option>
            <option value='9'>9 ADULT</option>
            <option value='10'>10 ADULT</option>
          </select>
          <select name='children'>
            <option value='0'>0 CHILDREN</option>
            <option value='1'>1 CHILD</option>
            <option value='2'>2 CHILDREN</option>
            <option value='3'>3 CHILDREN</option>
            <option value='4'>4 CHILDREN</option>
            <option value='5'>5 CHILDREN</option>
            <option value='6'>6 CHILDREN</option>
            <option value='7'>7 CHILDREN</option>
            <option value='8'>8 CHILDREN</option>
            <option value='9'>9 CHILDREN</option>
            <option value='10'>10 CHILDREN</option>
          </select>
        </div>
        <div className='filters'>
          <p>Sort by</p>
          <p>Price</p>
          <p>Top picks</p>
          <p>Reduced rate</p>
        </div>
      </div>
    );
  }
}

export default Header;
