import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container } from 'reactstrap';
import { BrowserRouter, Route } from 'react-router-dom';
import Navbar from './components/Navbar.js';
import CharacterGrid from './components/CharacterGrid.js';
import Resume from './components/Resume.js';
import About from './components/About.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <Container className="App">
         <a  href="/character-design" >
            <img className="logo-img" src={require('./Images/AUSTIN RAYE LOGO.png')}/>
         </a>
         <Navbar/>
         <Route path="/resume" component={Resume} />
         <Route path="/character-design" component={CharacterGrid} />
         <Route path="/" component={About} />
      </Container>
    );
  }

}

export default App;
