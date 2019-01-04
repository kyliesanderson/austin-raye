import React, {Component} from 'react';
import { Document, Page } from 'react-pdf';


class Resume extends Component {
   constructor(props){
      super(props);
      
      this.render = this.render.bind(this);
      this.onDocumentLoadSuccess = this.onDocumentLoadSuccess.bind(this);

      this.state = {
         numPages: null,
         pageNumber: 1
      }

   }

   onDocumentLoadSuccess(numPages){
      this.setState({numPages});
   }

   render(){
      return (
         <Document file="AUSTIN RAYE RESUME.pdf" onLoadSuccess={this.onDocumentLoadSuccess}>
            <Page pageNumber={this.state.pageNumber} />
         </Document>
      );
   }
}

export default Resume;
