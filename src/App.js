import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container } from 'reactstrap';
import { BrowserRouter, Route } from 'react-router-dom';
import Navbar from './components/Navbar.js';
import CharacterGrid from './components/CharacterGrid.js';
import EnviroGrid from './components/EnviroGrid.js';
import Spellsonder from './components/Spellsonder.js';
import Resume from './components/Resume.js';
import About from './components/About.js';
import Homepage from './components/Homepage.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <Container className="App">
         <a  href="/" >
            <img className="logo-img" src={require('./Images/AUSTIN RAYE LOGO.png')}/>
         </a>
         <Navbar/>
         <Route path="/character-design" component={CharacterGrid} />
         <Route path="/environment-design" component={EnviroGrid} />
         <Route path="/spellsonder" component={Spellsonder}/>
         <Route path="/about" component={About} />
         <Route exact path="/" component={Homepage} />
      </Container>
    );
  }

}

export default App;
