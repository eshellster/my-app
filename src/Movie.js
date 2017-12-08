import React from 'react';
import './Movie.css';
import PropTypes from 'prop-types';

class Movie extends React.Component{
  render() {

    return(
    <div>
      <h1>{this.props.title}</h1>
      <MoviePoster poster={this.props.poster}/>
    </div>
    );
  }
}

Movie.propTypes = {
  title:PropTypes.string.isRequired,
  poster:PropTypes.string.isRequired
};



class MoviePoster extends React.Component {
  render() {
    return(
      <img src={this.props.poster} alt="" />
    );
  }
}
export default Movie

MoviePoster.propTypes = {
  poster:PropTypes.string.isRequired
}
