 import { Component } from 'react-bootstrap';
 import { Button, ButtonToolbar } from 'react-bootstrap';

// import Modal from "react-bootstrap/Modal";
// import "bootstrap/dist/css/bootstrap.min.css";


import React from 'react';
import ReactDOM from "react-dom";
import Modal from "react-bootstrap/Modal";
import ModalBody from "react-bootstrap/ModalBody";
import ModalHeader from "react-bootstrap/ModalHeader";
import ModalFooter from "react-bootstrap/ModalFooter";
import ModalTitle from "react-bootstrap/ModalTitle";

class ExampleApp extends React.Component{

  // const [show, setShow] = useState(false);

  // const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);


render() {
  return (
    <div>
      <Button variant="primary" onClick={false}>
        Launch demo modal
      </Button>

      <Modal show={true} onHide={false}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" >
            Close
          </Button>
          <Button variant="primary" >
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
}

export default ExampleApp;