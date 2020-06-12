import React, { useState } from 'react';
import MovieCard from './MovieCard';

export default function SearchMovies() {

    const [query, setquery] = useState('')
    const [movies, setMovies] = useState([])

    const searchMovies = async (e) => {
        e.preventDefault();
        const url = `https://api.themoviedb.org/3/search/movie?api_key=404d326d1c2f08642cefbe63a5cb437b&language=en-US&query=${query}&page=1&include_adult=false`;

        try {
            const res = await fetch(url);
            const movie = await res.json();
            setMovies(movie.results);
            console.log(movie.results)
        } catch (err) {
            console.error(err)
        }
    }
    return (
        <>
            <MovieCard movies={movies} />
            <form className="form" onSubmit={searchMovies}>
                <label className="label" htmlFor="query">Movie Name</label>
                <input className="input"
                    type="text"
                    name='query'
                    value={query}
                    onChange={(e) => setquery(e.target.value)}>

                </input>
                <button className="button" type="submit">Search</button>
            </form>

        </>
    )
}