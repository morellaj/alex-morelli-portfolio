import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import projectData from '../../projectData.json';
import ProjectDisplay from './ProjectDisplay';
import ProjectsFilter from './ProjectsFilter';
import { Heading } from '../../sharedStyles';

export default function ProjectPage() {
  const [filter, setFilter] = useState('Show All');

  projectData.sort((a, b) => a.order - b.order);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const projectList = filter === 'Show All'
    ? projectData
    : projectData.filter((project) => project.tags.includes(filter));

  return (
    <Container>
      <Heading>Projects and Accomplishments</Heading>
      <ProjectsFilter count={projectList.length} filter={filter} setFilter={setFilter} />
      <ProjectDisplay projectList={projectList} />
    </Container>
  );
}

const Container = styled.main`
    background-color: ${({ theme }) => theme.themeColor};
    color: ${({ theme }) => theme.themeDarkerColor};
    padding-top: 30px;
`;
