import React, { Component } from 'react';

// TODO - Add anchor tags and arial labels

class Footer extends Component {
  render() {
    return (
      <div className='footer-container'>
        <footer>
          <nav>
            <h4>DESTINATIONS</h4>
            <ul>
              <li>MORZINE-LES GETS</li>
              <li>CHAMONIX</li>
              <li>MARRAKECH</li>
              <li>MARRAKECH - ATLAS</li>
            </ul>
          </nav>
          <nav>
            <h4>TRUE EXPERIENCE</h4>
            <ul>
              <li>OUR PHILOSOPHY</li>
              <li>OUR SERVICES</li>
              <li>CORPORATE EVENTS</li>
              <li>TELL YOUR EXPERIENCE</li>
              <li>E-LIFEMAG</li>
            </ul>
          </nav>
          <nav>
            <h4>TRUE PROFESSIONALS</h4>
            <ul>
              <li>OUR TEAM</li>
              <li>CARRERS</li>
              <li>PRESS</li>
              <li>LEASE TO EMERALD</li>
            </ul>
          </nav>
          <nav>
            <ul>
              <li>FAQ</li>
              <li>PRIVACY POLICY</li>
              <li>TERMS AND CONDITIONS</li>
              <li>LOGIN</li>
              <li>CONTACT US</li>
            </ul>
          </nav>
        </footer>
        <form>
          <label>STAY IN TOUCH</label>
          <input type='email' placeholder='EMAIL' />
          <input type='submit' value='SEND' />
        </form>
        <div className='socials'>
          <img src={require('../assets/icon-socials-fb.svg')} alt='facebook link' height='40' />
          <img src={require('../assets/icon-socials-twitter.svg')} alt='twitter link' height='40' />
          <img src={require('../assets/icon-socials-ig.svg')} alt='instagram link' height='40' />
          <img src={require('../assets/icon-socials-linkedin.svg')} alt='linkedin link' height='40' />
        </div>
        <div className='copyright'>MADE WITH &#10084;</div>
      </div>
    );
  }
}

export default Footer;
