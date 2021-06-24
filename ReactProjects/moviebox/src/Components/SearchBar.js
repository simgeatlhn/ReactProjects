import React from "react";
import { Link } from "react-router-dom";  //link gidilmesini istediğimiz sayfa

class SearchBar extends React.Component {

    //onSubmit için event handler
    handleFormSubmit = (event) => {
        event.preventDefault(); //event in varsayılan davranışını durdurur
    }

    render() {
        return (
            <form onSubmit={this.handleFormSubmit}>
                <div className="form-row mb-5" >
                    <div className="col-12">
                        <div className="col-10">
                            <input
                                onChange={this.props.searchMovieProp}
                                type="text" className="form-control"
                                placeholder="Search a movie">
                            </input>
                        </div>
                        <div className="col-2">
                            <Link to="/add" //Add Movie butonuna tıkladığımızda AddMovie.js deki forma yönlendirir
                                type="button"
                                className="btn btn-md btn-danger"
                                style={{ float: 'right' }}>Add Movie
                            </Link>
                        </div>
                    </div>
                </div>
            </form>

        )

    }




}


export default SearchBar;