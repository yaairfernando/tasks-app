import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Title = styled.header`
  background: #4a47a3;
  color: #fff;
  text-align: center;
`

const Nav = styled.nav`
  color: #fff;
  font-size: 20px;
  text-decoration: none;
  margin-bottom: 10px;
  & > a {
    color: #fff;
    padding: 5px 7px;
    background: #916dd5;
    border-radius: 3px;
    transition: background 0.3s ease;
    transition: color 0.3s ease-in-out;

    &:hover {
      text-decoration: none;
      background: #fff;
      color: #916dd5;
    }
  }
`

function Header() {
  return(
    <header>
    <Title className="pt-2 pb-2 mb-2">
      <h1>Mi Todo List</h1>
      <Nav>
        <Link to="/" className="mr-2">Home</Link>
        <Link to="/about">About</Link>
      </Nav>
     </Title>
    </header>
  )
};

export default Header