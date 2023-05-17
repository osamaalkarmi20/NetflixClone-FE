import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

import axios from 'axios';

import { Form } from 'react-bootstrap';

function MovieModalcopy(props) {



    const handleChange = async (event) => {

        event.preventDefault();


        const obj = {
            comment: event.target.comment.value
        }

        console.log(obj)

        const serverURL = `${process.env.REACT_APP_serverURL}/UPDATE/${props.clickedMovie.id}`;
        const results = await axios.put(serverURL, obj)
        console.log('done', results)

        props.handleClose();

        props.takeNewDataFromUpdatedModal(results.data.rows)
    }

    return (
        <>
            <Modal show={props.showFlag} onHide={props.handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    <Form onSubmit={handleChange} >
                        <Form.Group className="mb-3">
                            <Form.Label>Name</Form.Label>
                            <Form.Control name="comment" type="text" defaultValue={props.clickedMovie.comment} />
                        </Form.Group>

                        <Button variant="primary" type="submit">Submit</Button>
                    </Form>


                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={props.handleClose}>
                        Close
                    </Button>


                </Modal.Footer>
            </Modal>
        </>
    )
}

export default MovieModalcopy;