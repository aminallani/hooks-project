import React from 'react'
import MovieRating from './MovieRating'
import { Link } from 'react-router-dom';

const MovieCard = ({ movie }) => {
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
            <Link to={`/movies/${movie.id}`}>  <h3><i className="material-icons"></i>WATCH TRAILER </h3></Link>
          </div>
          <MovieRating />
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
