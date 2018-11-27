import React, { Component } from 'react';
import logo from './logo.svg';
import { Nav, NavItem } from 'react-bootstrap';
import {Container } from 'reactstrap';
import './App.css';

class App extends Component {
  render() {
    return (
      <Container className="App">
         <a href="/">
            <h1> Austin Raye Haffelfinger</h1>
         </a>
         <Nav bsStyle="pills" justified className= "nav">
            <NavItem href="/about">About</NavItem>
            <NavItem href="/portfolio">Portfolio</NavItem>
            <NavItem href="/resume">Resume</NavItem>
         </Nav>
      </Container>
    );
  }

}

export default App;
