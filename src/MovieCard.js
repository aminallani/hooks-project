import React from 'react'
import MovieRating from './MovieRating'

const MovieCard = ({movie}) => {
  return (
    <>

    <div className="movie_card" id="bright">
      <div className="info_section">
        <div className="movie_header">
          <img
            className="locandina"
            src={movie.posterURL}
          />
          <h1>{movie.title}</h1>
          <p>{movie.rating}</p>
        </div>
        <div className="movie_desc">
          <p className="text">
          {movie.description}
          </p>
        </div>
        <div className='btn'>
            <button>
                < i className=' play'/> see trailer
            </button>
        </div>
        <MovieRating/>
        <div className="movie_social">
          <ul>
          </ul>
        </div>
      </div>
      <div className="blur_back bright_back" />
    </div>
  </>
  
  )
}

export default MovieCard
