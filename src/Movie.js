import React from 'react';
import PropTypes from 'prop-types';
import LinesEllipsis from 'react-lines-ellipsis';
import './Movie.css';



function Movie({title, poster, genres, summary}){
  return(
    <div className="Movie">
      <div className="Movie__Column">
        <MoviePoster poster={poster} alt={title}/>
      </div>
      <div className="Movie__Column">
        <h1>{title}</h1>
        <div className="Movie__genres">
          {genres.map((genre, index) => <MoviesGenre genre={genre} key={index} /> )}
        </div>
        <div className="Movie__summary">
          <LinesEllipsis
                  text={summary}
                  maxLine='3'
                  ellipsis='...'
                  trimRight
                  basedOn='letters'
                  />
        </div>
      </div>




    </div>
  )
}

Movie.propTypes = {
  title:PropTypes.string.isRequired,
  poster:PropTypes.string.isRequired,
  genres:PropTypes.array.isRequired,
  summary:PropTypes.string.isRequired
};

function MoviePoster({poster, alt}){
  return(
    <img src={poster} alt={alt} title={alt} className="Movie__Poster" />
  )
}

MoviePoster.propTypes = {
  poster:PropTypes.string.isRequired,
  alt:PropTypes.string.isRequired
}

function MoviesGenre({genre}){
  return(
    <span className="Movie__genre">{genre} </span>
  )
}
MoviesGenre.propTypes = {
  genre:PropTypes.string.isRequired
}

export default Movie
