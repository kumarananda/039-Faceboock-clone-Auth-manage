import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './HeadSearchModal.scss'

function HeadSearchModal({handleClose, show}) {

  // HeadSearchModal state
  // const [show, setShow] = useState(false);
  // const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);

  return (
    <>
      {/* <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button> */}

      <Modal show={show} onHide={handleClose}>
        <Modal.Body>
          Woohoo, you're reading this text in a modal!
        </Modal.Body>
      </Modal>
    </>
  );
}

export default HeadSearchModal