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
         <Row>
         <Col sm="12" md="12" lg="12" xl="6"><img className="about-img" src={require("../Images/portrait.png")} />
         </Col>
         <Col>
               <p className="about-text">In other people’s bags you might find a wallet, a phone, maybe some chapstick. In my purse I keep 37 prisma color markers. There is not room for much else. It is the same with my life. Art is my first true love and it tends to take over all of my spaces, from bags to closets to drawers and more. And I am perfectly happy with that.
               <br />
               <br />
It started with pencil and pen and soon it was digital and design. The more I explore the more things I want to try. I have a passion for improvement and a hunger for new experiences. I want to do EVERYTHING.
               <br />
               <br />
I love character design, environment and storyboarding. Ultimately, I want to be an art director, so I can use all my skills to the fullest!</p>
            </Col>
         </Row>
         </Container>
      );
   }
}

export default About;
