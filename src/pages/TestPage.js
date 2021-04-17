import React from 'react';
import styled from 'styled-components';
import { PageHero } from '../components';

import { IKImage, IKContext } from 'imagekitio-react';

import { useQuery, gql } from '@apollo/client';

const PRODUCT_QUERY = gql`
  query MyQuery {
    quadros_test {
      product_image
      product_name
      product_price
    }
  }
`;

const TestPage = () => {
  const { loading, error, data } = useQuery(PRODUCT_QUERY);

  console.log('aaaaaaaaaaaaaaa', data);

  return (
    <main>
      <PageHero title='Sobre nós' />
      <Wrapper className='page section section-center'>
        <IKContext urlEndpoint='https://ik.imagekit.io/quadros/'>
          <IKImage
            path='/quadro-decorativo-seixos-moldura_9EjW8BERWU.png'
            transformation={[
              {
                height: '400',
                width: '400',
              },
            ]}
            loading='lazy'
          />
        </IKContext>
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
export default TestPage;
