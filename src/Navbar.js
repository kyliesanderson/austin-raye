import React, {Component} from 'react';
import { Nav, NavItem } from 'react-bootstrap';

class Navbar extends Component {
   render() {
      return (
         <Nav bsStyle="pills" justified >
            <NavItem href="/about">About</NavItem>
            <NavItem href="/portfolio">Portfolio</NavItem>
            <NavItem href="/resume">Resume</NavItem>
         </Nav>
      );
   }
}

export default Navbar;
