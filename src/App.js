import React, { Component } from 'react';

import './App.css';

import data from './data';
import MovieList from './components/Movie/List';

class App extends Component {
  render() {
    return ( 
     <MovieList data = {data} />
    );
  }
}

// const App = props => <MovieList data={data} />;
export default App;
