import React, { Component } from 'react';
import {Container} from 'reactstrap';

import charPreview from '../Images/homepage/page1.jpg';
import stylePreview from '../Images/homepage/styles.jpg';
import styleGuide1 from '../Images/homepage/Style guide edit1.jpg';
import styleGuide2 from '../Images/homepage/Style guide edit2.jpg';

class Homepage extends Component {
   constructor(props){
      super(props);
   }

   render(){
      return (
         <Container>
            <h1 className="homepage-title">CHARACTERS</h1>
            <img className="homepage-img" src={charPreview} />
            <h1 className="homepage-title">STYLE</h1>
            <img className="homepage-img" src={stylePreview} />
            <h1 className="homepage-title">STORYBOARD</h1>
            <div className="homepage-vid">
            <iframe
               width="100%"
               height="562"
               src="https://player.vimeo.com/video/352385273"
               frameborder="0"
               webkitallowfullscreen
               mozallowfullscreen
               allowfullscreen>
            </iframe>
            </div>
            <h1 className="homepage-title">VISUAL DEVELOPMENT DOC</h1>
            <img className="homepage-img" src={styleGuide1} />
            <img className="homepage-img" src={styleGuide2} />
         </Container>
      )
   }
}

export default Homepage;
