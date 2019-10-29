import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const HeaderContainer = styled.div`
  margin: -8px;
  display: flex;
  flex-direction: column;
  background: white url('https://bit.ly/2PqeACg') no-repeat fixed center;
  img {
    padding: 8px;
  }
`;

export const Selectors = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  padding: 220px 0 30px 0;
  select {
    width: 240px;
    padding: 8px 15px;
    margin-bottom: 5px;
    border: 1px solid black;
  }
  option {
    width: 240px;
  }
`;

export const Filters = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 13px;
  background-color: black;
  color: white;
  p {
    padding: 5px;
    white-space: nowrap;
    min-width: 75px;
  }
  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

// Hamburguer Menu & Inside
export const HamburguerMenu = styled.div`
  display: block;
  position: absolute;
  top: 25px;
  right: 25px;
  z-index: 1;
  -webkit-user-select: none;
  user-select: none;
  input {
    display: block;
    width: 40px;
    height: 32px;
    position: absolute;
    top: -7px;
    left: -5px;
    cursor: pointer;
    opacity: 0;
    z-index: 2; /* Places on top of the hamburger */
    -webkit-touch-callout: none;
  }

  span {
    display: block;
    width: 33px;
    height: 4px;
    margin-bottom: 5px;
    position: relative;
    background: black;
    border-radius: 3px;
    z-index: 1;
    transform-origin: 4px 0px;
    transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1.0), background 0.5s cubic-bezier(0.77, 0.2, 0.05, 1.0),
      opacity 0.55s ease;
  }
  span:first-child {
    transform-origin: 0% 0%;
  }
  span:nth-last-child(2) {
    transform-origin: 0% 100%;
  }

  /* Transform hamburguer */
  input:checked ~ span {
    opacity: 1;
    transform: rotate(45deg) translate(-2px, -1px);
    background: white;
  }
  input:checked ~ span:nth-last-child(3) {
    opacity: 0;
    transform: rotate(0deg) scale(0.2, 0.2);
  }
  input:checked ~ span:nth-last-child(2) {
    opacity: 1;
    transform: rotate(-45deg) translate(0, -1px);
    background: white;
  }
  #hamburguer-menu-inner {
    display: none;
    background: black;
    position: absolute;
    width: 300px;
    height: 100vh;
    margin: -100px 0 0 0;
    padding: 50px;
    padding-top: 125px;
    right: -25px;
    transform-origin: 0% 0%;
    transform: translate(100%, 0);
    transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1.0);
    font-family: 'Anton', sans-serif;
    font-size: 2em;
    justify-content: space-between;
    text-align: right;
  }
`;

export const HeaderLink = styled(NavLink)`
  color: white;
  text-decoration: none;
`;

export const CompanyNav = styled.div`
  height: 50%;
  display: flex;
  flex-direction: column;
`;

export const UserNav = styled.div`
  display: flex;
  flex-direction: column;
`;
