function WithOutResult () {


    return(
    <h1>hola</h1>
)

}

 // eslint-disable-next-line react/prop-types
 function WithResult ({movies}){

    return(
         
        <ul>
          {
            // eslint-disable-next-line react/prop-types
            movies.map(movie=> (
              <li key={movie.imdbID}>
                <h1>{movie.Title}</h1>               
                <img src={movie.Poster} alt="img pelicula" />
                <h2>{movie.Type}</h2>
                <h2>{movie.Year}</h2>
                
              </li>
            ))
          }
        </ul>


      ) 

}


// eslint-disable-next-line react/prop-types
export function Movies ({movies}) {

    // eslint-disable-next-line react/prop-types
    const hasMovies = movies?.length > 0

    return (
        hasMovies ? <WithResult movies={movies}/> : <WithOutResult/>
    )
}

