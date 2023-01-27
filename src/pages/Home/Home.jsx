import React, { useEffect, useState } from "react";
import { getMovies } from "services/movies.api";
import { Link } from "react-router-dom";

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
                console.log(data.results);
            } catch (error) {
                console.log(error);
            }
        };
        fetchData({}, trending);
    }, []);

    return (
        <>
            <h2>Trending today</h2>
            <ul>
                {movies?.map(movie => (
                    <li key={movie.id}>
                        <Link>{movie.original_title}</Link>
                    </li>
                ))}
            </ul> 
        </>
    );
};

export default Home;