import React, { useEffect, useState } from "react";
import { getMovies } from "services/movies.api";
import { MoviesListItem } from "components/MoviesListItem";
import { toast } from "react-toastify";

const Home = () => {
    // const [loading, setLoading] = useState(false);
    const [movies, setMovies] = useState(null);
    const trending = '/trending/movie/day';
    useEffect(() => {
        const fetchData = async (params, purpose) => {
            // setLoading(true);
            try {
                const data = await getMovies(params, purpose);
                setMovies(data.results);
            } catch (error) {
                toast.error(error);
            }
        };
        fetchData({}, trending);
    }, []);

    return (
        <>
            <h2>Trending today</h2>
            <ul>
                {movies?.map(movie => (
                    <MoviesListItem key={movie.id} movie={movie}/>
                ))}
            </ul> 
        </>
    );
};

export default Home;