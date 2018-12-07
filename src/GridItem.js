import React, {Component} from 'react';
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';

class GridItem extends Component {
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
      return (
         <div>
         <Button onClick={this.toggle}>
            <img className="grid-img" src={require("./drawing.jpg")} />
         </Button>

         <Modal isOpen={this.state.modal} toggle={this.toggle}>
            <ModalHeader toggle={this.toggle} />
            <ModalBody>
               <img src={require("./drawing.jpg")} />
            </ModalBody>
            <ModalFooter>
               <p> this is the description </p>
            </ModalFooter>
         </Modal>
         </div>
      );
   }

}

export default GridItem;
