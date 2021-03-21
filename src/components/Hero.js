import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
// import heroBcg from '../assets/hero-bcg.jpeg'
import heroBcg from '../assets/quadro-decorativo-freedom-ambiente-completo.png';
// import heroBcg2 from '../assets/hero-bcg-2.jpeg'
import heroBcg2 from '../assets/quadro-decorativo-canoa-ao-por-do-sol-moldura.png';
const Hero = () => {
  return (
    <Wrapper className='section-center'>
      <article className='content'>
        <h1>
          Quadros e Quadros <br />
          Estilo e conforto
        </h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto, at
          sed omnis corporis doloremque possimus velit! Repudiandae nisi odit,
          aperiam odio ducimus, obcaecati libero et quia tempora excepturi quis
          alias?
        </p>
        <Link to='/produtos' className='btn hero-btn'>
          compre agora
        </Link>
      </article>
      <article className='img-container'>
        <img src={heroBcg} alt='nice table' className='main-img' />
        <img src={heroBcg2} alt='person working' className='accent-img' />
      </article>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  min-height: 60vh;
  display: grid;
  place-items: center;
  .img-container {
    display: none;
  }

  p {
    line-height: 2;
    max-width: 45em;
    margin-bottom: 2rem;
    color: var(--clr-grey-5);
    font-size: 1rem;
  }
  @media (min-width: 992px) {
    height: calc(100vh - 5rem);
    grid-template-columns: 1fr 1fr;
    gap: 8rem;
    h1 {
      margin-bottom: 2rem;
    }
    p {
      font-size: 1.25rem;
    }
    .hero-btn {
      padding: 0.75rem 1.5rem;
      font-size: 1rem;
    }
    .img-container {
      display: block;
      position: relative;
    }
    .main-img {
      width: 100%;
      height: 550px;
      position: relative;
      border-radius: var(--radius);
      display: block;
      object-fit: cover;
    }
    .accent-img {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 250px;
      transform: translateX(-50%);
      border-radius: var(--radius);
      -webkit-box-shadow: 3px 3px 5px 6px rgba(68, 68, 68, 0.4);
      -moz-box-shadow: 3px 3px 5px 6px rgba(68, 68, 68, 0.4);
      box-shadow: 3px 3px 5px 6px rgba(68, 68, 68, 0.4);
    }
    .img-container::before {
      /* content: '';
      position: absolute;
      width: 10%;
      height: 80%;
      background: var(--clr-primary-9);
      bottom: 0%;
      left: -8%;
      border-radius: var(--radius); */
    }
  }
`;

export default Hero;
