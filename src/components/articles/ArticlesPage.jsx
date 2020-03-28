/* eslint-disable guard-for-in */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-restricted-syntax */
import React, { useEffect } from 'react';
import styled from 'styled-components';
import colors from '../../colors.json';
import Navigation from './Navigation';
import ArticleImage from './ArticleImage';
import ArticleVideo from './ArticleVideo';
import ArticleIteration from './ArticleIteration';
import articlesData from '../../articlesData.json';
import queryString from 'query-string';

export default function Home({ location, match }) {
  const data = articlesData[match.params.article];

  useEffect(() => {
    const { id } = queryString.parse(location.search);
    if (id && document.getElementById(id)) {
      document.getElementById(id).scrollIntoView();
    } else {
      window.scrollTo(0, 0);
    }
  });

  let title;
  const article = [];
  const navList = [];

  for (let i = 0; i < data.length; i += 1) {
    const { type, content, source, caption, version, learnings } = data[i];
    switch (type) {
      case 'title':
        title = content;
        article.push(<Title>{content}</Title>);
        break;
      case 'section':
        article.push(<Section id={content.replace(/\s+/g, '-').toLowerCase()}>{content}</Section>);
        navList.push(content);
        break;
      case 'text':
        article.push(<Text id={i} dangerouslySetInnerHTML={{ __html: content }} />);
        break;
      case 'video':
        article.push(<ArticleVideo id={source} source={source} caption={caption} />);
        break;
      case 'image':
        article.push(<ArticleImage id={source} source={source} caption={caption} />);
        break;
      case 'iteration':
        article.push(
          <ArticleIteration
            source={source}
            caption={caption}
            version={version}
            learnings={learnings}
          />
        );
        break;
      default:
        break;
    }
  }

  return (
    <Container>
      <Navigation title={title} navList={navList} />
      <ArticleContainer>
        {article}
      </ArticleContainer>
    </Container>
  );
}

const Container = styled.main`
    background-color: white;
    color: black;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    font-size: 20px;

    @media(max-width: 1100px){
      font-size: 15px;
    }
`;

const ArticleContainer = styled.article`
    width: 100%;
    padding: 0 1em;

    @media(max-width: 900px){
      width: 35em;
    }
`;

const Title = styled.h1`

`;

const Section = styled.h2`
  font-weight: 400;
  width: 100%;
  font-size: 2em;
  margin-top: 90px;
  color: ${colors.darkColor}
`;

const Text = styled.p`
    line-height: 200%;
    font-size: 1em;
    margin-bottom: 1em;
`;
