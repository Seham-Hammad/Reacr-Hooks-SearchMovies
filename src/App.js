
import React, { Component } from 'react'
import SearchMovies from './SearchMovies'


import './App.css';

export default class main extends Component {
  render() {
    return (
      <div className='contianer'>
        <h1 className="title"> React Movie Search</h1>
        <SearchMovies />
      </div>
    )
  }
}
