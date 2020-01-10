import React, { Component } from 'react';
import styled from 'styled-components';

const Title = styled.header`
  background: #4a47a3;
  color: #fff;
  text-align: center;
`

function Header() {
  return(
    <header>
    <Title className="pt-2 pb-2 mb-2">
      <h1>Mi Todo List</h1>
     </Title>
    </header>
  )
};

export default Header