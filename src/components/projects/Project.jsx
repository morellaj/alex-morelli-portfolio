import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const noShowList = ['Software', 'Front-end', 'Team', "ACRView", 'TIMS', 'Award', 'Electrical'];

export default function ProjectDisplay({ project: { title, tags, role, links, description } }) {
  const videoTitle = title.replace(/\s+/g, '-').toLowerCase();
  const linkList = links
    ? links.map(({ link, name }) => {
      if (name === 'More Info') {
        return (
          <Link to={link} style={{ textDecoration: 'none' }} key={name}>
            <Button>{name}</Button>
          </Link>
        );
      }
      return (
        <a
          href={link}
          style={{ textDecoration: 'none' }}
          target="_blank"
          rel="noopener noreferrer"
          key={name}
        >
          <Button href={link}>
            {name}
          </Button>
        </a>
      );
    }) : null;
  const tagString = tags.reduce((acc, ele) => {
    if (noShowList.includes(ele)) {
      return acc;
    }
    if (acc === '') {
      return ele;
    }
    return `${acc}, ${ele}`;
  }, '');
  return (
    <Container key={title}>
      <SectionContainer>
        <Picture>
          <source srcSet={`./assets/${videoTitle}.jpg`} />
          <img
            src={`./assets/${videoTitle}.jpg`}
            style={{ width: '100%', borderRadius: '5px' }}
            alt={title}
          />
        </Picture>
      </SectionContainer>
      <SectionContainer>
        <DetailsContainer>
          <Title>{title}</Title>
          <Detail>{role}</Detail>
          <Detail style={{ fontWeight: 600 }}>{tagString}</Detail>
        </DetailsContainer>
        <DescriptionContainer>
          <Description dangerouslySetInnerHTML={{ __html: description }} />
        </DescriptionContainer>
        <Links>{linkList}</Links>
      </SectionContainer>
    </Container>

  );
}

const Container = styled.section`
  width: 1000px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin: 30px; 
  border-radius: 5px;
  position: relative;
  box-shadow: 0 1px 1px black, 0 2px 5px rgba(0,0,0,0.6), 0 4px 10px rgba(0,0,0,0.2);
  background-color: white;
  font-size: 20px;
  overflow: hidden;

  @media(max-width: 1100px) {
    display: flex;
    flex-direction: column;
    width: 500px;
  }

  @media(max-width: 600px){
    font-size: 15px;
    margin: 30px 10px;
  }
`;

const SectionContainer = styled.section`
  padding: 5px;
  display: flex;
  flex-direction: column;
`;

const Title = styled.h1`
  color: ${({ theme }) => theme.themeDarkerColor};
  font-size: 1.4em;
  font-weight: 500;
  margin-bottom: .5em;
`;

const Picture = styled.picture`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const DetailsContainer = styled.div`
  color: ${({ theme }) => theme.themeDarkerColor};
  margin: .15em .5em;
  border-bottom: 1px solid ${({ theme }) => theme.themeDarkerColor};
`;

const Detail = styled.p`
  margin: .15em;
`;

const Links = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1em;
`;

export const Button = styled.div`
  border-radius: 5px;
  padding: .5em;
  width: 4.5em;
  text-align: center;
  font-size: 1em;
  font-weight: 700;
  background-color: ${({ theme }) => theme.themeDarkColor};
  color: white;
  margin: 0 .5em;
  border: 1px solid black;
  box-shadow: 0 1px 1px black, 0 2px 5px rgba(0,0,0,0.6), 0 4px 10px rgba(0,0,0,0.2);
  border-color: rgba(0,0,0,0.2) rgba(0,0,0,0.35) rgba(0,0,0,0.55);
  border-bottom-width: 2px;
  transition: background-color 1s;

  :hover {
    background-color: ${({ theme }) => theme.themeDarkerColor};
  }
`;

const DescriptionContainer = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
`;

const Description = styled.p`
  margin: .5em;
  color: black;
`;
