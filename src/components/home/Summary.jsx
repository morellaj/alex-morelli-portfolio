import React from 'react';
import styled from 'styled-components';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

export default function Summary() {
  return (
    <Container>
      <Heading>
        Fullstack Developer
      </Heading>
      <Text>
        Customer-focused web developer with 3+ years experience.
        <br />
        Love learning new technologies. Specialize in React, JavaScript, and CSS.
      </Text>
      <Links>
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
        <StyledLink href="/assets/Alex Morelli Resume 2020.docx" download>
          <Button>Resume</Button>
        </StyledLink>
      </Links>
    </Container>
  );
}


const Container = styled.article`
    background-color: ${({ theme }) => theme.themeDarkColor};
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0 .5em 2em .5em;
    font-size: 20px;

    @media(max-width: 800px){
      font-size: 15px;
    }
`;

const Heading = styled.h1`
  font-weight: 700;
  font-size: 2em;
  margin-bottom: .25em;
`;

const Text = styled.p`
  font-size: 1em;
  max-width: 35em;
  text-align: center;
  margin-bottom: 1em;
`;

const Links = styled.nav`
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

const Button = styled.div`
  border-radius: .2em;
  padding: .33em;
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
