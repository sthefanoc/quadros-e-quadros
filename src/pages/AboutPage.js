import React from 'react';
import styled from 'styled-components';
import { PageHero } from '../components';
// import aboutImg from '../assets/hero-bcg.jpeg'
import aboutImg from '../assets/quadros-e-quadros-logo.svg';
const AboutPage = () => {
  return (
    <main>
      <PageHero title='Sobre nós' />
      <Wrapper className='page section section-center'>
        <img src={aboutImg} alt='nice desk' />
        <article>
          <div className='title'>
            <h2>Nossa História</h2>
            <div className='underline'></div>
          </div>
          <p>
            Criada com o objetivo de trazer uma decoração que seja a sua cara, a
            Quadros & Quadros trabalha para enaltecer a personalidade, estilo,
            gosto e visão do mundo que os nossos clientes únicos possuem.
          </p>
        </article>
      </Wrapper>
    </main>
  );
};
const Wrapper = styled.section`
  display: grid;
  gap: 4rem;
  img {
    width: 100%;
    height: 100%;
    display: block;
    border-radius: var(--radius);
    object-fit: cover;
  }
  p {
    font-size: 1.5rem;
    line-height: 2;
    max-width: 45em;
    margin: 0 auto;
    margin-top: 2rem;
    color: var(--clr-grey-5);
  }
  .title {
    text-align: left;
  }
  .underline {
    margin-left: 0;
  }
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
`;
export default AboutPage;
