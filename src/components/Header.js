import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

// Styled Components
import { HeaderContainer, HamburguerMenu, HeaderLink, CompanyNav, UserNav, Selectors, Filters } from './styles/header';

class Header extends Component {
  render() {
    return (
      <HeaderContainer>
        <nav>
          <NavLink to='/'>
            <img src='https://emeraldstay.com/assets/svg/icon-logo-sm.svg' alt='Home' height='55' />
          </NavLink>
          <HamburguerMenu>
            <input type='checkbox' />

            <span />
            <span />
            <span />

            <div className='hamburguer-menu-inner'>
              <CompanyNav>
                <HeaderLink to='/coming-soon'>OUR PHILOSOPHY</HeaderLink>
                <HeaderLink to='/coming-soon'>DESTINATIONS</HeaderLink>
                <HeaderLink to='/coming-soon'>CORPORATE EVENTS</HeaderLink>
                <HeaderLink to='/coming-soon'>E-LIFEMAG</HeaderLink>
              </CompanyNav>
              <UserNav>
                <HeaderLink to='/coming-soon'>LOGIN</HeaderLink>
                <HeaderLink to='/coming-soon'>CONTACT US</HeaderLink>
              </UserNav>
            </div>
          </HamburguerMenu>
        </nav>
        <Selectors>
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
        </Selectors>
        <Filters>
          <p>Sort by</p>
          <div className='filter-options'>
            <p>Price</p>
            <p>Top picks</p>
            <p>Reduced rate</p>
          </div>
        </Filters>
      </HeaderContainer>
    );
  }
}

export default Header;
