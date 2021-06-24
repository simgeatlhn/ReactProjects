import React from "react";
import axios from "axios";

class EditMovie extends React.Component {

    state = { //objenin özellikleri
        name: "",
        rating: "",
        overview: "",
        imageURL: ""
    }

    //Edit kısmında bilgilerin gelmesi için
    async componentDidMount() {
        const id = this.props.match.params.id; //id match
        const response = await axios.get(`http://localhost:3002/movies/${id}`) //jsx kullanırız çünkü belirli bir id talep edilecek
        const movie = response.data;  //response dan gelen bilgiler movie ye aktarıldı
        this.setState({
            name: movie.name,
            rating: movie.rating,
            overview: movie.overview,
            imageURL: movie.imageURL
        })
    }

    //event handler- edit kısmında değişiklik yapıldığında değişiklikleri yazar
    onInputChange = (e) => {


        //bracket notation []:
        this.setState({
            [e.target.name]: e.target.value //hedefte değişen özellikleri value olarak aktarır
        })

    }


    handleFormSubmit = (e) => {
        e.preventDefault(); //sayfayı refresh etmesini engeller

        //object restrictions
        const { name, rating, overview, imageURL } = this.state;

        const id = this.props.match.params.id;

        //yeni değerlerle oluşturulmuş movie nesnesi
        const updatedMovie = {
            name,
            rating,
            overview,
            imageURL
        }

        this.props.onEditMovie(id, updatedMovie);
        this.props.history.push("/"); //Edit butonuna basılınca ana sayfaya gider
    }



    render() {


        return (
            <div className="container">
                <form className="mt-5" onSubmit={this.handleFormSubmit}>
                    <input className="form-control" id="disabledInput" type="text" placeholder="Edit the form for update.." disabled />
                    <div className="form-row">
                        <div className="form-group col-md-10">
                            <label htmlFor="inputName">Name</label>
                            <input type="text"
                                className="form-control"
                                name="name"
                                value={this.state.name}
                                onChange={this.onInputChange} />
                        </div>
                        <div className="form-group col-md-2">
                            <label htmlFor="inputRating">Rating</label>
                            <input
                                type="text"
                                className="form-control"
                                name="rating"
                                value={this.state.rating}
                                onChange={this.onInputChange} />
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-12">
                            <label htmlFor="inputImage">Image URL</label>
                            <input
                                type="text"
                                className="form-control"
                                name="imageURL"
                                value={this.state.rating}
                                onChange={this.onInputChange} />
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-12">
                            <label htmlFor="overviewTextarea">Overview</label>
                            <textarea
                                className="form-control"
                                name="overview"
                                rows="5"
                                value={this.state.overview}
                                onChange={this.onInputChange}></textarea>
                        </div>
                    </div>
                    <input type="submit" className="btn btn-warning btn-block" value="Edit Movie" />
                </form>
            </div>
        );
    }
}

export default EditMovie;