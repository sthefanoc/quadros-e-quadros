import React from 'react';
import styled from 'styled-components';
const Footer = () => {
  return (
    <Container>
      <h5>
        &copy; {new Date().getFullYear()}
        <span> Quadros&Quadros </span>
        Todos os direitos reservados.
      </h5>
      <h5 className='powered-by'>
        Powered by{' '}
        <span>
          <a href='https://masteradin.com/' target='_blank'>
            Masteradin
          </a>
        </span>
      </h5>
    </Container>
  );
};

const Container = styled.footer`
  height: 5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  background: var(--clr-black);
  text-align: center;
  span {
    color: var(--clr-primary-5);
  }
  h5 {
    color: var(--clr-white);
    /* margin: 1rem; */
    font-weight: 400;
    text-transform: none;
    line-height: 1.25;
    align-self: left;
  }
  h5 a {
    color: var(--clr-primary-7);
    font-weight: bold;
  }
  .powered-by {
    font-style: italic;
    /* font-size: 0.9rem; */
  }
  @media (min-width: 776px) {
    flex-direction: row;
  }
  @media (max-width: 650px) {
    padding: 10px 10px 10px 10px;
  }
`;

export default Footer;
