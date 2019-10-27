import styled from 'styled-components';

export const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StyledFooter = styled.footer`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const FooterNav = styled.nav`
  max-width: 45%;
  h4 {
    margin-bottom: 10px;
  }
  ul {
    list-style-type: none;
    padding: 0 1% 0 0;
  }
  li {
    padding-bottom: 2%;
  }
`;

export const NewsletterForm = styled.form`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  padding: 5% 0 8% 0;
  .email {
    display: flex;
    flex-direction: column;
  }
  label {
    font-size: 75%;
    padding-bottom: 3%;
  }
  input[type=email] {
    max-width: 100%;
    border: 1px solid black;
    padding: 12px 16px;
  }
  input[type=submit] {
    font-family: 'Anton', sans-serif;
    min-width: 100px;
    border: none;
    padding: 7px 20px;
    background-color: #e4e7e7;
    font-size: 1.1em;
  }
`;

export const Socials = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  img {
    padding: 3%;
  }
`;

export const Copyright = styled.div`
  text-align: center;
  padding: 2% 0 5% 0;
`;
