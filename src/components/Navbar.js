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
                  <a className="nav-link" href="/about">ABOUT</a>
               </Col>
               <Col>
                  <Dropdown className="nav-link" isOpen={this.state.dropownOpen} toggle={this.toggle}>
                     <DropdownToggle
                        tag="span"
                        onClick={this.toggle}
                        data-toggle="dropdown"
                        aria-expanded={this.state.dropdownOpen}
                     >
                     PORTFOLIO
                     </DropdownToggle>
                     <DropdownMenu>
                        <a className="nav-link" href="/character-design">CHARACTER DESIGN</a>
                        <a className="nav-link" href="/environment-design">ENVIRONMENT DESIGN</a>
                        <a className="nav-link" href="/spellsonder">SPELLSONDER</a>
                     </DropdownMenu>
                  </Dropdown>
               </Col>
               <Col>
                  <a className="nav-link" href="https://drive.google.com/file/d/18quwSEW0sUWcVwBfGJKNV2WnzSrehx25/view?usp=sharing" target="_blank">RESUME</a>
               </Col>
            </Row>
         </Container>
      );
   }
}

export default Navbar;
