import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container } from 'reactstrap';
import { BrowserRouter, Route } from 'react-router-dom';
import Navbar from './Navbar.js';
import CharacterGrid from './CharacterGrid.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <Container className="App">
         <img className="logo-img" src={require('./AUSTIN RAYE LOGO.png')}/>
         <Navbar/>
         <BrowserRouter>
            <Route exact path="/character-design" component={CharacterGrid} />
         </BrowserRouter>
      </Container>
    );
  }

}

export default App;
