import { SearchForm } from "components/SearchForm";
import React, {useEffect, useState} from "react";
import { Link } from "react-router-dom";
import {getMovies} from '../../services/movies.api'

const Movies = () => {
    const [movies, setMovies] = useState(null);
    const [searchQuery, setSerchQuery] = useState('')
    const search = '/search/movie';

    const handleFormSubmit = searchQuery => {
        setSerchQuery(searchQuery);
  }

    useEffect(() => {
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
                    <li key={movie.id}>
                        <Link>{movie.original_title}</Link>
                    </li>
                ))}
            </ul>
        </>
    )
};

export default Movies;