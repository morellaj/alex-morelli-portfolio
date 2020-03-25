import React from 'react';
import styled from 'styled-components';

export default function ArticleVideo({ source, caption }) {
  return (
    <Container key={source}>
      <ImageContainer>
        <Image src={`../../../assets/${source}.jpg`} alt={caption} />
        <Caption>{caption}</Caption>
      </ImageContainer>
    </Container>

  );
}

const Container = styled.div`
    display: flex;
    justify-content: center;
    margin-bottom: 2em;
`;

const ImageContainer = styled.div`
    box-shadow: 0 1px 1px black, 0 2px 5px rgba(0,0,0,0.6), 0 4px 10px rgba(0,0,0,0.2);
    width: 35em;
    border-radius: 5px;
    overflow: hidden;
    background-color: rgba(0, 0, 0, .8);

    @media(max-width: 900px){
      width: 100%;
    }
`;

const Image = styled.img`
    width: 100%;
`;

const Caption = styled.div`
    text-align: center;
    padding: .15em .25em .3em .25em;
    color: white;
    font-size: 1em;
    font-weight: 700;
`;
