import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import axios from 'axios';


function MovieModal(props) {
   
             
  const handleChange = event => {
   

    props.clickedMovie.comment= event.target.value;
  };
        
    const addToFav = (item) =>{
      
 
        const serverURL = `${process.env.REACT_APP_serverURL}/addMovies`;
        
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
                    <textarea name="comment" id="comment" rows="5" tabindex="4"  required="required" onChange={handleChange}></textarea>
                
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={props.handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={()=>{props.handleClose(addToFav(props.clickedMovie)) }}>
                        Save to Favorite
                    </Button>
                </Modal.Footer>
            </Modal>
            
        </>
    )
}

export default MovieModal;