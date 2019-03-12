import React, {Component} from 'react';
import { Button, Modal, ModalBody, ModalFooter, ModalHeader, Card, CardImg } from 'reactstrap';

class CharacterCard extends Component {
   constructor(props) {
      super(props);

      this.toggle = this.toggle.bind(this);
      this.render = this.render.bind(this);

      this.state = {
         modal: false
      };
   }

   toggle() {
      this.setState({modal: !this.state.modal});
   }

   render(){
      var image = require('../Images/characters/' + this.props.image);
      const closeBtn = <button className="close" onClick={this.toggle}>&times;</button>;

      return (
         <div>
         <Button className="grid-button" onClick={this.toggle}>
            <Card className="character-card">
               <CardImg className="character-img" src={require("../Images/characters/" + this.props.image)} />
            </Card>
         </Button>

         <Modal className="modal-mod" size="lg" isOpen={this.state.modal} toggle={this.toggle}>
            <ModalHeader className="modal-header-mod" close={closeBtn} >
               <h1 className="header-text">{this.props.title.toUpperCase()}</h1>
            </ModalHeader>
            <ModalBody className="modal-body-mod">
               <img className="modal-img" src={require("../Images/characters/" + this.props.image)} />
            </ModalBody>
            <ModalFooter className="modal-footer-mod">
               <p className="footer-text">{this.props.description}</p>
            </ModalFooter>
         </Modal>
         </div>
      );
   }

}

export default CharacterCard;
