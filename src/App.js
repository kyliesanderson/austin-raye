import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container } from 'reactstrap';
import Navbar from './Navbar.js';
import GridItem from './GridItem.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <Container className="App">
         <a href="/">
            <h1> Austin Raye Haffelfinger</h1>
         </a>
         <Navbar/>
         <GridItem />
      </Container>
    );
  }

}

export default App;
