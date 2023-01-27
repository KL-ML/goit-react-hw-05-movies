import { MoviesListItem } from "components/MoviesListItem";
import { SearchForm } from "components/SearchForm";
import React, {useEffect, useState} from "react";

import {getMovies} from '../../services/movies.api'

const Movies = () => {
    const [movies, setMovies] = useState(null);
    const [searchQuery, setSerchQuery] = useState('')
    const search = '/search/movie';

    const handleFormSubmit = searchQuery => {
        setSerchQuery(searchQuery);
  }

    useEffect(() => {
        if (!searchQuery) {
            return;
        }
        const fetchData = async (params, purpose) => {
            // setLoading(true);
            try {
                const data = await getMovies(params, purpose);
                setMovies(data.results);
            } catch (error) {
                console.log(error);
            }
        };
        fetchData({query: searchQuery}, search);
    }, [searchQuery]);
   
    return (
        <>
            <SearchForm onSubmit={handleFormSubmit}/>
            <ul>
                {movies?.map(movie => (
                    <MoviesListItem key={movie.id} movie={movie}/>
                ))}
            </ul>
        </>
    )
};

export default Movies;