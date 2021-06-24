import React from "react";
import { Link } from "react-router-dom"

const MovieList = (props) => {

    // 1-)event-handler
    // function handleClick(event) {
    //     console.log(event.pageY)
    // }
    //2-)ya da js expression şeklinde yazılabilir
    //onClick={(event) => console.log(event.pageY)}


    //truncate fonk
    const truncateOverview = (string, maxLength) => {
        if (!string) return null;
        if (string.length <= maxLength) return string;
        return `${string.substring(0, maxLength)} ...`; //substring methodu ile açıklamayı kısaltırız
    }

    //{truncateOverview(movie.overview, 50)} 50 karakterden sonra keser tranceteOverwiew fonksiyonunu uygular
    return (
        <div className="row" >

            {props.movies.map((movie, i) => ( //i eklenen movie nin id sini temsil eder bulunan id lerden farklı olmasını sağlar

                <div className="col-lg-4 key" key={i}>
                    <div className="card mb-4 shadow-sm">
                        <img src={movie.imageURL} className="card-img-top" alt="Sample Movie" />
                        <div className="card-body">
                            <h5 className="card-title">{movie.name}</h5>
                            < p className="card-text">{truncateOverview(movie.overview, 100)}</p>
                            <div className="d-flex justify-content-between align-items-center">
                                <button type="button" onClick={(event) => props.deleteMovieProp(movie)} className="btn btn-md btn-outline-danger">Delete</button>
                                <Link
                                    type="button"
                                    className="btn btn-md btn-outline-primary"
                                    to={`edit/${movie.id}`}
                                >Edit </Link>
                                <h2><span className="badge badge-info">{movie.rating}</span></h2>
                            </div>
                        </div>
                    </div>
                </div>

            ))}
        </div>

    );

}

export default MovieList;