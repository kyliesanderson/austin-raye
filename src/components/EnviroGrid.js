import environments from '../data/enviros.json';
import EnviroCard from './EnviroCard.js';
import React, { Component } from 'react';
import {Container, Row, Col, CardGroup} from 'reactstrap';

class EnviroGrid extends Component {
   constructor(props){
      super(props);

      this.render = this.render.bind(this);
   }

   createCard(item){
      return <EnviroCard
         image={item.imageName}
         title={item.title}
         description={item.description}
         size={item.size}
         thumbnail={item.thumbnail}
      />;
   }

   createCards(items){
      return items.objects.map(this.createCard);
   }

   render(){
      return (
         <CardGroup className="enviro-card-deck">
            {this.createCards(environments)}
         </CardGroup>
      )
   }
}

export default EnviroGrid;
