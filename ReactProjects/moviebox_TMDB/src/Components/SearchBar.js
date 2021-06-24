import React from "react";

class SearchBar extends React.Component {



    //onSubmit için event handler
    handleFormSubmit = (event) => {
        event.preventDefault(); //event in varsayılan davranışını durdurur
    }

    render() {

        //***searchMovieProp App.js deki searchMovieProp u çalıştırır //searchMovieProp da searchMovie eventini çalıştırır
        return (

            <form onSubmit={this.handleFormSubmit}>
                <div className="form-row mb-5">
                    <div className="col-12">

                        <input onChange={this.props.searchMovieProp}
                            type="text"
                            className="form-control"
                            placeholder="Search Movie">
                        </input>

                    </div>
                </div>
            </form>

        );
    }
}

export default SearchBar;