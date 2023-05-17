import axios from "axios";
import { useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";
import MovieModalcopy from "./MovieModalcopy";


function FavList() {
    const [favdata, setfavdata] = useState([])
    const [newArr, setNewArr] = useState([])
    const [showFlag, setShowFlag] = useState(false);
    const [clickedMovie, setClickedMovie] = useState({});



    const handleShow = (item) => {
        setShowFlag(true)

        setClickedMovie(item)
    }

    const handleClose = () => {
        setShowFlag(false)
    }

    const getAllMovies = () => {

        const serverURL = `${process.env.REACT_APP_serverURL}/getMovies`;


        fetch(serverURL)
            .then(response => {
                response.json().then(data => {
                    console.log(data)
                    setfavdata(data)

                })
            })
    }

    const deletefunc = async (item) => {


        const obj = item.id;
        console.log(obj)

        const serverURL = `${process.env.REACT_APP_serverURL}/DELETE/${item.id}`;
        const result = await axios.delete(serverURL, obj);
        console.log('done', result)
        getAllMovies()


    }




    const takeNewDataFromUpdatedModal = (arr) => {
        setNewArr(arr)
        console.log(newArr)
    }

    useEffect(() => {

        getAllMovies()
    }, [])
    useEffect(() => {
        setNewArr(favdata)
    }, [favdata])



    return (
        <>

            <h1>Home</h1>
            {newArr.map(item => {
                return (
                    <Card style={{ width: '18rem' }} key={item.id}>
                        <Card.Img variant="top" src={item.poster_path} />
                        <Card.Body>
                            <Card.Title>{item.title}</Card.Title>
                            <Card.Text>{item.comment}</Card.Text>

                            <Button variant="primary" onClick={() => { deletefunc(item) }}>DELETE</Button>
                            <Button variant="secondary" onClick={() => { handleShow(item) }}>UPDATE</Button>
                        </Card.Body>
                    </Card>
                )


            })}


            <MovieModalcopy showFlag={showFlag} handleClose={handleClose} clickedMovie={clickedMovie} takeNewDataFromUpdatedModal={takeNewDataFromUpdatedModal} />

        </>
    )
}

export default FavList;