import React from 'react';

class MovieCard extends React.Component{

    render() {
        const {movie} = this.props;
        return (
        <div className="card col-3"> 
            <img src={movie.Poster==="N/A" ? "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Color_icon_gray_v2.svg/220px-Color_icon_gray_v2.svg.png" : movie.Poster} className="card-img-top" />
            <div className="card-body">
                <h5 className="card-title">{movie.Title}</h5>
                <p className="card-text">{movie.Type}</p>
                <p className="card-text">{movie.Year}</p>
                <p className="card-text">{movie.watched ? "Watched" : "Not Watched"}</p>
            </div>
        </div>
        );
    }

}


export default MovieCard;