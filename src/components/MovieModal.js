import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import axios from 'axios';
import "./q.css";
function MovieModal(props) {
    
    const addToFav = (item) =>{
        const serverURL = `http://localhost:3005/addMovies`;
        
        axios.post(serverURL ,item)
        .then(response=>{
            console.log(item)
            
        })
        .catch((error)=>{
            console.log(error)
        })}
       
    return (
        <>
            <Modal  show={props.showFlag} onHide={props.handleClose} >
                <Modal.Header closeButton>
                    <Modal.Title class="blue">{props.clickedMovie.title}</Modal.Title>
                </Modal.Header >
                <Modal.Body class="blue">
                    <Image src={props.clickedMovie.poster_path} width='100%'></Image>
                    <textarea name="comment" id="comment" rows="5" tabindex="4"  required="required"></textarea>
                
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={props.handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={()=>{props.handleClose(addToFav(props.clickedMeme)) }}>
                        Save to Favorite
                    </Button>
                </Modal.Footer>
            </Modal>
            
        </>
    )
}

export default MovieModal;