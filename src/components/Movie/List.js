
import React from 'react';
import MovieCard from './Card';


// const MovieList = ({ data }) => Array.isArray(data) &&
//     data.map(m => <MovieCard key={m.imdbID} movie={m} />);


// const MovieList = ({data}) => {
//     return (
//         <div className="row justify-content-center">
//             { 
//                 Array.isArray(data) &&
//                 data.map(m => <MovieCard key={m.imdbID} movie={m} />)
//             }
//         </div>
//     )
// }

class MovieList extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            data: this.props.data,
            searchValue: '',
        }
        // this.filter = this.filter.bind(this);
    }

    filter = (e) => {
        // alert(e.target.value);
        const value = e.target.value.toLowerCase();
        const filteredData = this.props.data.filter(m => m.Title.toLowerCase().includes(value) ) ;
        this.setState({data: filteredData , searchValue: value});
    }

    watch = (e) => {
        const watchedMovie  = this.props.data.filter(m =>m.Title.toLowerCase().includes(this.state.searchValue) &&  m.watched );
        this.setState({data: watchedMovie});
    }
    
    render(){
        const {data} = this.state;
        const search = (
            <input className="search col-9" type="search" placeholder="Search" onChange={this.filter}></input>
            )
        return (
            <div className="row justify-content-center">
                <div className="col-8">
                    { search }
                </div>
                <div className="col-3 watch">
                    <input type="checkbox" onChange={this.watch}/> Watched
                </div>
                {  
                    Array.isArray(data) &&
                    data.map(m => <MovieCard key={m.imdbID} movie={m} />)
                }
            </div>
        )
    }
}
export default MovieList;