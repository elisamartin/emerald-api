import React, { Component } from 'react';

//Styled Components
import { FooterContainer, StyledFooter, FooterNav, NewsletterForm, Socials, Copyright } from './styles/footer';

// TODO - Add anchor tags and arial labels

class Footer extends Component {
  render() {
    return (
      <FooterContainer>
        <StyledFooter>
          <FooterNav>
            <h4>DESTINATIONS</h4>
            <ul>
              <li>MORZINE-LES GETS</li>
              <li>CHAMONIX</li>
              <li>MARRAKECH</li>
              <li>MARRAKECH - ATLAS</li>
            </ul>
          </FooterNav>
          <FooterNav>
            <h4>TRUE EXPERIENCE</h4>
            <ul>
              <li>OUR PHILOSOPHY</li>
              <li>OUR SERVICES</li>
              <li>CORPORATE EVENTS</li>
              <li>TELL YOUR EXPERIENCE</li>
              <li>E-LIFEMAG</li>
            </ul>
          </FooterNav>
          <FooterNav>
            <h4>TRUE PROFESSIONALS</h4>
            <ul>
              <li>OUR TEAM</li>
              <li>CARRERS</li>
              <li>PRESS</li>
              <li>LEASE TO EMERALD</li>
            </ul>
          </FooterNav>
          <FooterNav>
            <h4 style={{ height: '25px' }}> </h4>
            <ul>
              <li>FAQ</li>
              <li>PRIVACY POLICY</li>
              <li>TERMS AND CONDITIONS</li>
              <li>LOGIN</li>
              <li>CONTACT US</li>
            </ul>
          </FooterNav>
        </StyledFooter>
        <NewsletterForm>
          <div className='email'>
            <label htmlFor='email'>STAY IN TOUCH</label>
            <input type='email' placeholder='EMAIL' />
          </div>
          <input type='submit' value='SEND' />
        </NewsletterForm>
        <Socials>
          <img src={require('../assets/icon-socials-fb.svg')} alt='facebook link' height='40' />
          <img src={require('../assets/icon-socials-twitter.svg')} alt='twitter link' height='40' />
          <img src={require('../assets/icon-socials-ig.svg')} alt='instagram link' height='40' />
          <img src={require('../assets/icon-socials-linkedin.svg')} alt='linkedin link' height='40' />
        </Socials>
        <Copyright>MADE WITH &#10084;</Copyright>
      </FooterContainer>
    );
  }
}

export default Footer;
