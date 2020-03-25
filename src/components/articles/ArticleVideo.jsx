import React, { useEffect, useState, useRef } from 'react';
import styled from 'styled-components';
import { FaPlay } from 'react-icons/fa';

export default function ArticleImage({ source, caption }) {
  const [play, setPlay] = useState(false);
  const src = `../../../assets/${source}`;
  const target = useRef('');

  useEffect(() => {
    if (play) {
      target.current.play();
    } else {
      target.current.pause();
    }
  }, [play]);

  return (
    <Container key={source}>
      <ImageContainer>
        <Video id={source} onClick={() => setPlay(!play)} ref={target} muted>
          <source src={`${src}.mp4`} type="video/mp4" />
        </Video>
        <Caption>{caption}</Caption>
        <IconContainer onClick={() => setPlay(!play)} play={play}>
          <FaPlay onClick={() => setPlay(!play)} />
        </IconContainer>
      </ImageContainer>
    </Container>

  );
}

const Container = styled.div`
    display: flex;
    justify-content: center;
    margin-bottom: 40px;
`;

const ImageContainer = styled.div`
    box-shadow: 0 1px 1px black, 0 2px 5px rgba(0,0,0,0.6), 0 4px 10px rgba(0,0,0,0.2);
    width: 700px;
    border-radius: 5px;
    overflow: hidden;
    position: relative;
    background-color: rgba(0, 0, 0, .8);
`;

const Caption = styled.div`
    text-align: center;
    padding: 3px 5px 6px 5px;
    color: white;
    font-size: 20px;
    font-weight: 700;
`;

const Video = styled.video`
    width: 100%;
    cursor: pointer;
`;


const IconContainer = styled.div`
  display: ${(props) => (props.play ? 'none' : 'flex')};
  position: absolute;
  background-color: rgba(0, 0, 0, .3);
  width: 100%;
  height: 100%;
  bottom: 0;
  justify-content: center;
  align-items: center;
  font-size: 50px;
  cursor: pointer;
`;
