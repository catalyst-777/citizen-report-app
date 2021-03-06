
import React from 'react'; 
import { Modal, Button, DropdownButton, Dropdown  } from 'react-bootstrap'
// import { useParams } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";

// const UpdateComplaintPage = props => {

//     const { complaintId } = useParams();



//     return (
//         <>
//             <h1>Complaint { complaintId }</h1>
//         </>
//     );
// }
function ComplaintModal(props) {
    // const [show, setShow] = useState(false);
  
    // const handleClose = () => setShow(false);
    // const handleShow = () => setShow(true);
  
    return (
      <>
        <Button variant="primary" onClick={props.handleShow}>
          Update
        </Button>
  
        <Modal
          show={props.show}
          onHide={props.handleClose}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>Complaint Details</Modal.Title>
          </Modal.Header>
          <Modal.Body >
            <div className='d-flex justify-content-around'>
            <DropdownButton id="dropdown-basic-button" title="Category">
                <Dropdown.Item href="#/action-1">Undefined</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Water and Power</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Street Repair</Dropdown.Item>
            </DropdownButton>
        
            <DropdownButton id="dropdown-basic-button" title="Status">
                <Dropdown.Item href="#/action-1">Not Checked</Dropdown.Item>
                <Dropdown.Item href="#/action-2">In Progress</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Resolved</Dropdown.Item>
            </DropdownButton>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={props.handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }

export default ComplaintModal;