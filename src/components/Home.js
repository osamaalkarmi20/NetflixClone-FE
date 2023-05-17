
import { useEffect, useState } from 'react'

import MoviesList from './MoviesList';

function Home() {

    const [moviesdata, setMoviesData] = useState([])

    const getAllMovies = () => {
        const serverURL = `${process.env.REACT_APP_serverURL}/trending`;

     
        fetch(serverURL)
            .then(response => {
                response.json().then(data => {
                    console.log(data)
                    setMoviesData(data)

                })
            })
    }

    useEffect(()=>{
        getAllMovies()
    },[])


    return (
        <>
         <MoviesList moviesdata={moviesdata}></MoviesList>  
        </>
    )
}

export default Home;