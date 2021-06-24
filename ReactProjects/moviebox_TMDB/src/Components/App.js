import React from "react";
import SearchBar from "./SearchBar"; //componentleri import et
import MovieList from "./MovieList";
import axios from "axios";
require('dotenv').config(); //api key gizli olması için

class App extends React.Component {

    state = {
        movies: [],
        searchQuery: ""
    }

    //axios kütüphanesi ile get request
    async componentDidMount() {
        const response = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`);
        this.setState({ movies: response.data.results })
        //console.log(response.data.results); //console kısmında api bilgilerini(title,poster_path) görmek için kullan
    }


    deleteMovie = async (movie) => {

        axios.delete(`http://localhost:3002/movies/${movie.id}`);

        const newMovieList = this.state.movies.filter(
            m => m.id !== movie.id
        );

        this.setState(state => ({
            movies: newMovieList
        }))
    }


    searchMovie = (event) => {
        this.setState({ searchQuery: event.target.value })
    }

    render() {

        let filteredMovies = this.state.movies.filter(
            (movie) => {
                return movie.title.toLowerCase().indexOf(this.state.searchQuery.toLowerCase()) !== -1
            }
        )

        return (
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <SearchBar
                            searchMovieProp={this.searchMovie}
                        />
                    </div>
                </div>
                <MovieList
                    movies={filteredMovies}
                    deleteMovieProp={this.deleteMovie}
                />
            </div>
        );
    }
}

export default App;