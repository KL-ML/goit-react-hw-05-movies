import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getMovies } from '../../services/movies.api';
// import { Link } from "react-router-dom";

export const MovieDetails = () => {

    const [movie, setMovie] = useState(null);
    const { movieId } = useParams();
    const movieUrl = `/movie/${movieId}`;
    

    useEffect(() => {
        const fetchData = async (params, purpose) => {
            // setLoading(true);
            try {
                const data = await getMovies(params, purpose);
                setMovie(data);
                console.log('data:', data);
            } catch (error) {
                console.log(error);
            }
        };
        fetchData({ append_to_response: 'images' }, movieUrl);
        
    }, [movieUrl]);

    console.log('movie:', movie);
    return (
        <>
            {movie &&
                <div className="filmCard">
                    <div className="imgThumb">
                        <img src='' alt='' />
                    </div>
                    <div className="filmInfo">
                        <h2>{movie.title}</h2>
                        <p>User Score: {movie.popularity}%</p>
                        <h3>Overview</h3>
                        <p>{movie.overview}</p>
                        <h4>Genres</h4>
                        <ul>
                            {movie.genres.map(genre => {
                                return <li key={genre.id}>{genre.name}</li>
                            })}
                        </ul>
                    </div>
                    <div className="additionalInfo">
                        <p className="additionalTitle">Additional information</p>
                        <ul>
                            <li>Cast</li>
                            <li>Reviews</li>
                        </ul>
                    </div>
                </div>}
        </>
    );
};