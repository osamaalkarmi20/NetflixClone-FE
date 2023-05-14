

import Movie from './Movie';

function MoviesList(props){
  

   
     
    return (
        <>
           
           <Movie moviesdata={props.moviesdata}></Movie>
        </>
    )
}
export default MoviesList;