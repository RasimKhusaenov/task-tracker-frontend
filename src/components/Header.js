import React from 'react';
import styled from 'styled-components';

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: black;
`;

const Wrapper = styled.section`
  padding: 2em;
  background: white;
`;

export default function Header(props) {
  const { children } = props
  return (
    <Wrapper>
      <Title>{children}</Title>
    </Wrapper>
  );
}
