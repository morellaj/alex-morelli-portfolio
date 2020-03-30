import React, { useEffect } from 'react';
import styled from 'styled-components';
import projectData from '../../projectData.json';
import ProjectDisplay from '../projects/ProjectDisplay';
import { Heading } from '../../sharedStyles';
import Summary from './Summary';


const list = ['Learning is the Solution', 'Online Book Maker', 'Online Science Curriculum', 'Gravity Simulator'];

export default function HomePage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  });

  const projectList = projectData.filter((project) => list.includes(project.title));

  return (
    <Container>
      <Summary />
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
