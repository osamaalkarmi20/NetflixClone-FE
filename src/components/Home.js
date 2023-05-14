
import { useEffect, useState } from 'react'

import MoviesList from './MoviesList';

function Home() {

    const [moviesdata, setMoviesData] = useState([])

    const getAllMovies = () => {
        const serverURL = `http://localhost:3005/trending`;

        // using axios
        // axios.get(serverURL)
        // .then(response=>{
        //     console.log(response.data)
        // })
        // .catch((error)=>{
        //     console.log(error)
        // })

        // using fetch
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