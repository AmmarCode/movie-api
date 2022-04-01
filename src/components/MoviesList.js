import React from 'react'
import "../App.css";

const MoviesList = ({ movies }) => {
  return (
    <div className='row'>
      {	movies &&
					movies.map((movie, index) => {
						return (
							<div className='d-flex poster-container' key={index}>
								<img className='movie-poster' src={movie.Poster} alt={movie.Title}/>						
							</div>
							
						)
					})
			}			
    </div>
  )
}

export default MoviesList