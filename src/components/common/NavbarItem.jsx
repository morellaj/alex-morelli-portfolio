// Package dependencies
import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

// Component
export default function Navbar({ unit: { title, link } }) {
  return (
    <Item
      key={title}
    >
      <StyledLink to={link}>
        <ItemText>{title}</ItemText>
      </StyledLink>
    </Item>
  );
}

// Styling
const Item = styled.div`
  border-radius: 5px;
  margin: 0 0 0 1em;
  transition: color 1s;

  :hover{
    color: ${({ theme }) => theme.themeDarkerColor};
  }
`;

const StyledLink = styled(Link)`
  display: flex;
  color: inherit;
  text-decoration: none;
  padding: 7px;

  @media(max-width: 500px) {
    padding: 5px;
  }
`;

const ItemText = styled.div`
  text-align: center;
`;
