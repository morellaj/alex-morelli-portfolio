import React from 'react';
import styled from 'styled-components';

export default function Home({ id, content }) {
  return (
    <Text id={id} dangerouslySetInnerHTML={{ __html: content }} />
  );
}

const Text = styled.div`
    line-height: 2;
    font-size: 20px;
    margin-bottom: 20px;
`;
