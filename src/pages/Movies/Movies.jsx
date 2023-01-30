import { MoviesListItem } from "components/MoviesListItem";
import { SearchForm } from "components/SearchForm";
import React, { useEffect, useState } from "react";
import { useSearchParams } from 'react-router-dom';
import css from './Movies.module.css';
import {getMovies} from '../../services/movies.api'
import { toast } from "react-toastify";

const Movies = () => {
    const [movies, setMovies] = useState(null);
    const purpose = '/search/movie';

    const [searchParams, setSearchParams] = useSearchParams();
    const searchQueryUrl = searchParams.get('query') ?? '';
    
    const handleFormSubmit = searchQuery => {
        setSearchParams({ query: searchQuery });
    }

    useEffect(() => {
        if (!searchQueryUrl) {
            return;
        }
        const fetchData = async (params, purpose) => {
            // setLoading(true);
            try {
                const data = await getMovies(params, purpose);
                if (data.total_results === 0) {
                    toast.error('There are no movies on your query!');
                    return;
                }
                setMovies(data.results);
            } catch (error) {
                toast.error(error);
            }
        };
        fetchData({query: searchQueryUrl}, purpose);
    }, [searchQueryUrl]);
   
    return (
        <div className={css.moviesPage}>
            <SearchForm onSubmit={handleFormSubmit} searchQueryUrl={searchQueryUrl}/>
            <ul>
                {movies?.map(movie => (
                    <MoviesListItem key={movie.id} movie={movie}/>
                ))}
            </ul>
        </div>
    )
};

export default Movies;