import React from 'react';
import './Movie.css';
import PropTypes from 'prop-types';


function Movie({title, poster}){
  return(
    <div>
      <h1>{title}</h1>
      <MoviePoster poster={poster}/>
    </div>
  )
}

Movie.propTypes = {
  title:PropTypes.string.isRequired,
  poster:PropTypes.string.isRequired
};

function MoviePoster({poster}){
  return(
    <img src={poster} alt="Movie Poster" />
  )
}
export default Movie

MoviePoster.propTypes = {
  poster:PropTypes.string.isRequired
}
