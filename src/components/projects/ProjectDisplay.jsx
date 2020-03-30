import React from 'react';
import styled from 'styled-components';
import Project from './Project';

export default function ProjectDisplay({ projectList }) {
  const list = projectList.map((project) => <Project project={project} key={project.title} />);

  return (
    <ProjectsContainer>
      {list}
    </ProjectsContainer>

  );
}

const ProjectsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;
