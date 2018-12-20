import React, {Component} from 'react';
import { Nav, NavItem } from 'react-bootstrap';
import { Row, Col, Container, Dropdown, DropdownMenu, DropdownToggle } from 'reactstrap';

class Navbar extends Component {
   constructor(props){
      super(props);

      this.toggle = this.toggle.bind(this);
      this.portfolioClick = this.portfolioClick.bind(this);
      this.state = {
         dropownOpen: false
      };
   }

   portfolioClick(){
      window.location.href="/character-design";
   }

   toggle(){
      this.setState({
         dropownOpen: !this.state.dropownOpen
      });
   }

   render() {
      return (
         <Container>
            <Row className="navbar">
               <Col>
                  <a className="nav-link" href="/about">About</a>
               </Col>
               <Col>
                  <Dropdown isOpen={this.state.dropownOpen} toggle={this.toggle}>
                     <DropdownToggle
                        tag="span"
                        onClick={this.portfolioClick}
                        onMouseEnter={this.toggle}
                        onMouseExit={this.toggle}
                        data-toggle="dropdown"
                        aria-expanded={this.state.dropdownOpen}
                     >
                     Portfolio
                     </DropdownToggle>
                     <DropdownMenu>
                        <a className="nav-link" href="/character-design">Character Design</a>
                        <a className="nav-link" href="/environment-design">Environment Design</a>
                     </DropdownMenu>
                  </Dropdown>
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
