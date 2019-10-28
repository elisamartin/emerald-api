import styled from 'styled-components';

export const ListingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 15px;
  @media screen and (min-width: 769px) {
    max-width: 49%;
  }
  img {
    width: 100%;
    max-height: 520px;
    object-fit: cover;
    overflow: hidden;
  }
  .listing-img {
    max-height: 930px;
  }
  .listing-text {
    padding: 1% 0;
    width: 90%;
  }
  h2,
  h5 {
    margin: 0;
  }
  button {
    background-color: #eece1c;
    font-family: 'Anton', sans-serif;
    font-size: 1.5em;
    border: none;
    padding: 8px 75px;
  }
`;
