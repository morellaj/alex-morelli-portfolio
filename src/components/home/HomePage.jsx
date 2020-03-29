import React, { useEffect } from 'react';
import styled from 'styled-components';
import projectData from '../../projectData.json';
import ProjectDisplay from '../projects/ProjectDisplay';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';


const list = ['Learning is the Solution', 'Online Book Maker', 'Online Science Curriculum', 'Gravity Simulator'];

export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  });

  const projectList = projectData.filter((project) => list.includes(project.title));

  return (
    <Container>
      <SummaryContainer>
        <SummaryHeading>
          Front-end Developer
        </SummaryHeading>
        <SummaryText>
          Web developer specializing in React.  Co-founder and developer of LearningistheSolution.com.  Award winning electrical engineer.
        </SummaryText>
        <SummaryLinks>
          <StyledLink
            href="https://github.com/morellaj"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </StyledLink>
          <StyledLink
            href="https://www.linkedin.com/in/alex-morelli-65b52a99"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedinIn />
          </StyledLink>
          <StyledLink href="/assets/Alex Morelli Resume 2020 v4.pdf" download>
            <Button>Resume</Button>
          </StyledLink>
        </SummaryLinks>
      </SummaryContainer>
      <article>
        <Heading>Recent Projects</Heading>
        <ProjectDisplay projectList={projectList} />
      </article>
    </Container>
  );
}

const Container = styled.main`
    background-color: ${({ theme }) => theme.themeColor};
    color: ${({ theme }) => theme.themeDarkerColor};
`;

const SummaryContainer = styled.article`
    background-color: ${({ theme }) => theme.themeDarkColor};
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0 10px 20px 10px;
    font-size: 20px;

    @media(max-width: 800px){
      font-size: 15px;
    }
`;

const SummaryHeading = styled.h1`
  font-weight: 700;
  font-size: 2em;
  margin-bottom: 10px;
`;

const SummaryText = styled.p`
  font-size: 1em;
  max-width: 600px;
  text-align: center;
  margin-bottom: 20px;
`;

const SummaryLinks = styled.nav`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-items: center;
  align-items: center;
  font-size: 2em;
`;

const StyledLink = styled.a`
  color: white;
  transition: color 1s;
  display: flex;

  :hover {
    color: ${({ theme }) => theme.themeDarkerColor};
  }
`;

const Heading = styled.h1`
  font-weight: 400;
  width: 100%;
  text-align: center;
  font-size: 40px;
  margin-top: 60px;
  margin-bottom: 0;
`;

const Button = styled.div`
  border-radius: 5px;
  padding: 8px;
  font-size: .6em;
  font-weight: 900;
  background-color: white;
  color: ${({ theme }) => theme.themeDarkColor};
  margin: 0 .6em;
  transition: background-color 1s;

  :hover {
    background-color: ${({ theme }) => theme.themeDarkerColor};
  }
`;
