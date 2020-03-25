// Package dependencies
import React from 'react';
import styled from 'styled-components';

// Component dependencies
import NavbarItem from './NavbarItem';
import colors from '../../colors.json';

// Data dependencies
const navbarList = [
  {
    title: 'Home',
    link: '/',
  },
  {
    title: 'Work',
    link: '/projects',
  },
  {
    title: 'About',
    link: '/articles/about',
  },
];

const items = navbarList.map((unit) => <NavbarItem unit={unit} key={unit.title} />);

// Component
export default function Navbar() {
  return (
    <Container>
      <NameContainer>
        Alex Morelli
      </NameContainer>
      <List>
        {items}
      </List>
    </Container>
  );
}

// Styling
const Container = styled.nav`
  display: flex;
  justify-content: space-between;
  background-color: ${colors.darkColor};
  color: white;
  width: 100%;
  padding: 30px 0;
  font-size: 15px;

  @media(max-width: 800px) {
    font-size: 10px;
  }

  @media(max-width: 400px) {
    font-size: 8px;
  }
`;

const NameContainer = styled.div`
    font-size: 3em;
    font-weight: 700;
    margin: 0 25px;
`;


const List = styled.ul`
  display: flex;
  justify-content: flex-end;
  align-items:center;
  margin: 0 20px 0 0;
  padding: 0;
  font-size: 2em;
  list-style-type: none;
`;
