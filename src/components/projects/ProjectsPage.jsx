import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import projectData from '../../projectData.json';
import ProjectDisplay from './ProjectDisplay';
import ProjectsFilter from './ProjectsFilter';
import colors from '../../colors.json';

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
      <Heading>Major Projects and Accomplishments</Heading>
      <ProjectsFilter count={projectList.length} filter={filter} setFilter={setFilter} />
      <ProjectDisplay projectList={projectList} />
    </Container>
  );
}

const Container = styled.main`
    background-color: ${colors.color};
    color: ${colors.darkerColor};
    padding-top: 30px;
`;

const Heading = styled.h1`
  font-weight: 400;
  width: 100%;
  text-align: center;
  font-size: 40px;
  margin: 0;
`;
