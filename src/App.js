import React from 'react';
import './App.css';
import Movie from './Movie';




class App extends React.Component {
// Render:   componentWillMount( )   →   render( )   →  componentDidMount( )
// Update:   componentWillReceiveProps( )   →   shouldComponentUpdate( )   ==  true   →  componentWillUpdate( )   →  render ( )   →  componentDidUpdate( )

  state = {
    greeting: 'Hello!',
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
      }

    ]
  }

  componentWillMount(){
  }

  componentDidMount(){
    setTimeout(() => {
      this.setState({
        movies : [
          ...this.state.movies,
          {
            title:"Batman",
            poster:"https://images-na.ssl-images-amazon.com/images/I/91b0XWc5rhL._SY445_.jpg"
          }
        ]
      })
    }, 2000)
  }

  render() {
    return (
      <div className="App">
        {this.state.greeting}
        {this.state.movies.map((movie, index) => {
        return <Movie title={movie.title} poster={movie.poster} key={index} />
        })}
      </div>
    );
  }
}

export default App;
