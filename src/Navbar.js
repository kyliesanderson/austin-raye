import React, {Component} from 'react';
import { Nav, NavItem } from 'react-bootstrap';
import { Row, Col, Container } from 'reactstrap';

class Navbar extends Component {
   render() {
      return (
         <Container>
            <Row className="navbar">
               <Col>
                  <a className="nav-link" href="/about">About</a>
               </Col>
               <Col>
                  <a className="nav-link" href = "/character-design">Portfolio</a>
               </Col>
               <Col>
                  <a className="nav-link" href="/resume">Resume</a>
               </Col>
            </Row>
         </Container>
      );
   }
}

export default Navbar;
