import React, {Component} from 'react';
import { Document, Page } from 'react-pdf';
import resume from '../AUSTIN RAYE RESUME.pdf';

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
         <Document file={resume} onLoadSuccess={this.onDocumentLoadSuccess}>
            <Page pageNumber={this.state.pageNumber} />
         </Document>
      );
   }
}

export default Resume;
