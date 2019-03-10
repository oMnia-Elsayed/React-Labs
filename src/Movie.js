
import React from 'react';

export const Movie=(props) => {
    const {movie} = props;
    return (
        <div className="card" > 
            <img src={movie.Poster==="N/A" ? "" : movie.Poster} className="card-img-top" />
            <div className="card-body">
                <h5 className="card-title">{movie.Title}</h5>
                <p className="card-text">{movie.Type}</p>
                <p className="card-text">{movie.Year}</p>
            </div>
        </div>
                
    )
 }
