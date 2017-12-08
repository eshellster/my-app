import React from 'react';
import './App.css';
import Movie from './Movie';

class App extends React.Component {
// Render:   componentWillMount( )   →   render( )   →  componentDidMount( )
// Update:   componentWillReceiveProps( )   →   shouldComponentUpdate( )   ==  true   →  componentWillUpdate( )   →  render ( )   →  componentDidUpdate( )

  state = {
  }

  componentWillMount(){
  }

  componentDidMount(){
    setTimeout(() => {
      this.setState({
        movies : [
          {
            title:"Matrix",
            poster:"https://consequenceofsound.files.wordpress.com/2017/03/the-matrix.png"
          },
          {
            title:"Oldboy",
            poster:"https://upload.wikimedia.org/wikipedia/en/6/67/Oldboykoreanposter.jpg"
          },
          {
            title:"Star Wars",
            poster:"http://realorfake4k.com/wp-content/uploads/2017/11/star-wars-last-jedi-4k-uhd-main.jpg"
          },
          {
            title:"Full Metal Jacket",
            poster:"https://static.rogerebert.com/uploads/movie/movie_poster/full-metal-jacket-1987/large_bleZBRX8XH6e9PR00aGCvdjvu3Q.jpg"
          },
          {
            title:"Batman",
            poster:"https://images-na.ssl-images-amazon.com/images/I/91b0XWc5rhL._SY445_.jpg"
          }

        ]
      })
    }, 5000)
  }

  _renderMovies = () => {
    const movies = this.state.movies.map((movie, index) => {
      return <Movie title={movie.title} poster={movie.poster} key={index} />
    })
    return movies
  }

  render() {
    return (
      <div className="App">
        {this.state.movies ? this._renderMovies() : 'Loading'}
      </div>
    );
  }
}

export default App;
