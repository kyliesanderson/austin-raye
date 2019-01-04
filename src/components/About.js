import React, { Component } from 'react';
import {Col, Row, Container} from 'reactstrap';

class About extends Component {
   constructor(props){
      super(props);

      this.render = this.render.bind(this);
   }

   render(){
      return (
         <Container>
               <img className="about-img" src={require("../Images/cat.jpg")} />
               <p className="about-text">Lorem ipsum dolor sit amet, ei eam affert epicuri probatus, similique definiebas interpretaris nec in, soluta detracto eum et. Tale nostro nominavi ea usu, ut oblique gloriatur ullamcorper duo. Id tation habemus cum, est diam aliquip legimus et, sed verear ocurreret consulatu te. Mel id dolore possim legimus, solum menandri periculis per ad, duis vituperatoribus an eum. Unum efficiantur ut quo, eligendi signiferumque cu ius, at solet nostrud philosophia pro.</p>
         </Container>
      );
   }
}

export default About;
