import React from 'react';
import styled from 'styled-components';

const list = [
  {
    'name': 'Show All',
    'category': 'all'
  },
  {
    'name': 'Software',
    'category': 'software'
  },
  {
    'name': 'Front-end',
    'category': 'software'
  },
  {
    'name': 'JavaScript',
    'category': 'software'
  },
  {
    'name': 'React',
    'category': 'software'
  },
  {
    'name': 'Redux',
    'category': 'software'
  },
  {
    'name': 'C++',
    'category': 'software'
  },
  {
    'name': 'Phaser 3',
    'category': 'software'
  },
  {
    'name': 'ACRView',
    'category': 'software'
  },
  {
    'name': 'TIMS',
    'category': 'software'
  },
  {
    'name': 'Award',
    'category': 'other'
  },
  {
    'name': 'Humanitarian',
    'category': 'other'
  },
  {
    'name': 'Leadership',
    'category': 'other'
  },
  {
    'name': 'Robotics',
    'category': 'other'
  },
  {
    'name': 'Electrical',
    'category': 'other'
  },
  {
    'name': 'Team',
    'category': 'other'
  },
];

export default function ProjectsFilter({ filter, setFilter, count }) {
  const buttons = list.map(({ name, category }) => (
    <Button
      category={category}
      selected={filter === name}
      onClick={() => setFilter(name)}
      key={name}
    >
      {name.toUpperCase()}
    </Button>
  ));

  const statement = filter === 'Show All'
    ? 'Showing all.  Use the buttons above to filter.'
    : `Showing ${count} projects filtered by ${filter.toUpperCase()}.`;

  return (
    <Container>
      <ButtonsContainer>
        {buttons}
      </ButtonsContainer>
      <Statement>{statement}</Statement>
    </Container>
  );
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 30px 0;
    font-size: 20px;

    @media(max-width: 1100px){
      font-size: 10px;
    }
`;

const ButtonsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 50em;

    @media(max-width: 500px){
      width: 100%;
    }
`;

const Button = styled.div`
  border-radius: 3px;
  padding: 5px;
  margin: 10px;
  text-align: center;
  font-size: 15px;
  font-weight: 700;
  background-color: ${({ selected, theme, category }) => (
    selected ? theme.themeDarkerColor : theme[`${category}Color`]
  )};
  color: white;
  border: 1px solid black;
  box-shadow: 0 1px 1px black, 0 1px 3px rgba(0,0,0,0.6), 0 2px 5px rgba(0,0,0,0.2);
  border-color: rgba(0,0,0,0.2) rgba(0,0,0,0.35) rgba(0,0,0,0.55);
  border-bottom-width: 1px;
  transition: background-color 1s;
  cursor: pointer;

  :hover {
    background-color: ${({ theme }) => theme.themeDarkerColor};
  }
`;

const Statement = styled.div`
  width: 980px;
  font-size: 20px;

  @media(max-width: 1100px){
    width: 490px;
    font-size: 20px;
  }

  @media(max-width: 500px){
    width: 90%;
    font-size: 14px;
  }
`;
