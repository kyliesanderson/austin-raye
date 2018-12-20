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
      var image = require('./' + this.props.image);
      return (
         <div>
         <Button className="character-button" onClick={this.toggle}>
            <Card className="character-card">
               <CardImg className="grid-img" src={require("./" + this.props.image)} />
            </Card>
         </Button>

         <Modal size="lg" isOpen={this.state.modal} toggle={this.toggle}>
            <ModalHeader toggle={this.toggle} />
            <ModalBody>
               <img className="modal-img" src={require("./" + this.props.image)} />
            </ModalBody>
            <ModalFooter>
               <p>{this.props.description}</p>
            </ModalFooter>
         </Modal>
         </div>
      );
   }

}

export default CharacterCard;
