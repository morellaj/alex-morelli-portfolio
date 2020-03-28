import React from 'react';
import styled from 'styled-components';
import colors from '../../colors.json';

export default function Home({ title, navList }) {
  const list = navList.map((section) => (
    <Section
      onClick={() => document.getElementById(section.replace(/\s+/g, '-').toLowerCase()).scrollIntoView({ behavior: 'smooth' })}
    >
      {section}
    </Section>
  ));
  return (
    <Container>
      <Title>{title}</Title>
      <SectionsContainer>
        {list}
      </SectionsContainer>
    </Container>
  );
}

const Container = styled.nav`
    background-color: ${colors.color};
    color: ${colors.darkerColor};
    border-radius: 25px;
    margin: 90px 20px;
    padding: 20px 20px;
    font-weight: 600;
    flex: 0 0 250px;
    position: sticky;
    top: 20px;

    @media(max-width: 900px){
      display: none;
    }
`;

const Title = styled.div`
    font-size: 20px;
    text-align: center;
    border-bottom: 1px solid ${colors.darkerColor};
    padding-bottom: 20px;
`;

const SectionsContainer = styled.div`
    display: flex;
    flex-direction: column;
    font-size: 18px;
`;

const Section = styled.div`
    margin-top: 10px;
    border-radius: 5px;
    padding: 8px;
    cursor: pointer;
    transition: color 1s, background-color 1s;

    :hover {
        color: white;
        background-color: ${colors.darkerColor};
    }
`;
