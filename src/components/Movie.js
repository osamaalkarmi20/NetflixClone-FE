
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import axios from 'axios';
import MovieModal from './MovieModal';
import { useState } from 'react';
function Movie(props){
    const [showFlag, setShowFlag] = useState(false);
    const [clickedMovie, setClickedMovie] = useState({});

    const handleShow = (item) => {
        setShowFlag(true)
      
        setClickedMovie(item)
    }

    const handleClose = () => {
        setShowFlag(false)
    }

    
    return (
        <>
                         
            <h1>Home</h1>
            {props.moviesdata.map(item => {
                return (
                    <Card style={{ width: '18rem' }} key={item.id}>
                    <Card.Img variant="top" src={item.poster_path} />
                    <Card.Body>
                        <Card.Title>{item.title}</Card.Title>
                        
                        <Button variant="primary" onClick={()=>{handleShow(item)}}>Add to Favorite</Button>
                    </Card.Body>
                </Card>
                )
             
        
            })} <MovieModal showFlag={showFlag} handleClose={handleClose} clickedMovie={clickedMovie}/>

        </>
    )
}
export default Movie;