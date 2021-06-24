import React from "react";
import SearchBar from "./SearchBar"; //componentleri import et
import MovieList from "./MovieList";
import AddMovie from "./AddMovie";
import EditMovie from "./EditMovie";
import axios from "axios";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom"; //Routing

class App extends React.Component {

    //state bir obje(= kullanılır)
    state = {

        //movies property (: kullanılır)
        //movies array - array objelerden oluşuyor
        movies: [],
        //searchQuery state in property si
        searchQuery: "" //input alanı
    }

    //**FETCH 
    //render ı sadece sayfanın içeriğini göstermek için kullanmayı tercih ederiz
    //bu yüzden http isteklerini componentDidMount() içerisine yazarız. fetch fonksiyonunu kullanarak verileri alırız
    //fetch asekron function -promise döndürür- asekron olması için await fetch ve async yazarız
    // async componentDidMount() {
    //     const baseURL = "http://localhost:3002/movies";
    //     const response = await fetch(baseURL);
    //     console.log(response);
    //     const data = await response.json();
    //     console.log(data);
    //     this.setState({ movies: data }) //data dan gelen bilgileri setState methodu ile  state içindeki movies e atarız
    // }

    //**AXIOS - http istekleri yapmak için promise tabanlı kütüphane fetch de 2 aşama axios tek aşama
    async componentDidMount() {
        this.getMovies();
    }

    //filmler güncellendikten sonra refresh etmeden ana sayfaya aktarması için
    async getMovies() {
        const response = await axios.get("http://localhost:3002/movies");
        this.setState({ movies: response.data }) //data response içinde
    }




    // //id ye göre filmleri filtrelemek için deletemovie fonk kullanılır
    // deleteMovie = (movie) => {
    //     const newMovieList = this.state.movies.filter(
    //         m => m.id !== movie.id
    //     );

    //     //setState methodu ile movies ile newMovies i değiştiririz

    //     //*movie listesi olmasaydı
    //     // this.setState({
    //     //     movies: newMovieList
    //     // })

    //     //*var olan movie listesi için state kullanmak daha mantıklı
    //     this.setState(state => ({
    //         movies: newMovieList
    //     }))
    // }

    //**FETCH API delete

    // deleteMovie = async (movie) => {

    //     const baseURL = `http://localhost:3002/movies/${movie.id}`; //silme işleminin yapılacağı id belirleniyor //kalıcı siler
    //     await fetch(baseURL, {
    //         method: "DELETE"  //methodu belirtmeliyiz get varsayılan method ama delete değil
    //     })

    //     const newMovieList = this.state.movies.filter(
    //         m => m.id !== movie.id
    //     );

    //     this.setState(state => ({
    //         movies: newMovieList
    //     }))
    // }

    //** AXIOS delete 
    //DELETE MOVIE
    deleteMovie = async (movie) => {

        axios.delete(`http://localhost:3002/movies/${movie.id}`); //kalıcı olarak siler

        const newMovieList = this.state.movies.filter(
            m => m.id !== movie.id
        );

        this.setState(state => ({
            movies: newMovieList
        }))
    }

    //SEARCH MOVIE
    searchMovie = (event) => {
        this.setState({ searchQuery: event.target.value }) //searchQuery input objesine, boş setState methodu ile event.taget.value ile girdiğimiz değeri searchQuery e atarız
    }

    //ADD MOVIE
    addMovie = async (movie) => {
        //post request kullanılır butonla ekleme yapılacak
        await axios.post(`http://localhost:3002/movies/`, movie)
        this.setState(state => ({
            movies: state.movies.concat([movie])
            //movies array concat methodu kullanılabilir. movie yi ekler
        }))
        this.getMovies();
    }

    //EDIT MOVIE
    editMovie = async (id, updatedMovie) => {
        //post request kullanılır butonla ekleme yapılacak
        await axios.put(`http://localhost:3002/movies/${id}`, updatedMovie) //güncellenmiş halini put request
        this.getMovies(); //sayfa refresh edilmeden güncellemeleri aktarmak için
    }

    render() {

        //**filteredMovie girilen harfe göre filmleri filtreler
        //** filtrelemede büyük küçük harften etkilenmemesi için toLowercase methodunu kullan
        //**indexOf methosu aranan terimi geri dönderir yoksa -1 dönderir
        let filteredMovies = this.state.movies.filter(
            (movie) => {
                return movie.name.toLowerCase().indexOf(this.state.searchQuery.toLowerCase()) !== -1
            }
        ).sort((a, b) => {  //sort method ile id si büyük olan listenin başına eklenir
            return a.id < b.id ? 1 : a.id > b.id ? -1 : 0; //1->ikiniciyi getir ,-1->birinciyi getir,0 eşitlik durumu
        });

        return (
            //router url değişimlerini inceler ve ilgili sayfaya yönlendirir
            <Router>
                <div className="container">
                    <Switch>
                        <Route path="/" exact render={() => (
                            <React.Fragment>
                                <div className="row">
                                    <div className="col-lg-12">
                                        <SearchBar
                                            searchMovieProp={this.searchMovie} //SearchBar dan gelen searchMovieProp gelir
                                        />
                                    </div>
                                </div>

                                <MovieList
                                    movies={filteredMovies}
                                    //deleteMovieProp sayesinde deleteMovie fonksiyonunu MovieList.js de kullanabiliriz
                                    deleteMovieProp={this.deleteMovie}
                                />
                            </React.Fragment>
                        )}>

                        </Route>

                        <Route path="/add" exact render={({ history }) => (
                            <AddMovie
                                onAddMovie={(movie) => {
                                    this.addMovie(movie)
                                    history.push("/")
                                }} />
                            //*history push ile eklediğimiz movie ana sayfadaki movie listesine eklenir
                            //onAddMovie props AddMovie.js den gelen
                            // aldığı movie yi addMovie fonksiyonuna parametre olarak gönderir
                        )}>

                        </Route>



                        <Route path="/edit/:id" render={(props) => (
                            <EditMovie
                                {...props}
                                onEditMovie={(id, movie) => {
                                    this.editMovie(id, movie)
                                }} />
                        )}>

                        </Route>



                    </Switch>

                </div>
            </Router >
        );
    }
}

export default App;