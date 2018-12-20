import characters from './data/mock.json';
import CharacterCard from './CharacterCard.js';
import React, { Component } from 'react';
import {Container, Row, Col, CardGroup} from 'reactstrap';

class CharacterGrid extends Component {
   constructor(props){
      super(props);

      this.render = this.render.bind(this);
   }

   createCard(item){
      return <CharacterCard
         image={item.imageName}
         title={item.title}
         description={item.description}
      />;
   }

   createCards(items){
      return items.objects.map(this.createCard);
   }

   render(){
      return (
         <CardGroup>
            {this.createCards(characters)}
         </CardGroup>
      )
   }
}

export default CharacterGrid;
