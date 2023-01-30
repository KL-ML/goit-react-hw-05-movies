import React, { useState, useEffect } from "react";
import { Link, Outlet, useLocation, useParams } from "react-router-dom";
import { getMovies } from '../../services/movies.api';
import css from './MovieDetails.module.css';
import { toast } from "react-toastify";

export const MovieDetails = () => {

    const [movie, setMovie] = useState({});
    const { movieId } = useParams();
    const movieUrl = `/movie/${movieId}`;
    const location = useLocation();

    useEffect(() => {
        const fetchData = async (params, purpose) => {
            // setLoading(true);
            try {
                const data = await getMovies(params, purpose);
                setMovie(data);
            } catch (error) {
                toast.error(error);
            }
        };
        fetchData({}, movieUrl);
    }, [movieUrl]);

    const { poster_path, title, vote_average, overview, genres } = movie;
    return (
        <>
            <Link to={location.state?.from ?? '/'}>Go back</Link>
            {movie &&
                <>
                    <div className={css.filmCard}>
                        <div className="imgThumb">
                            <img src={
                                poster_path
                                    ? `https://image.tmdb.org/t/p/w300${poster_path}`
                                    : `http://www.suryalaya.org/images/no_image.jpg`
                            }
                                width={320}
                                loading="lazy"
                                alt="poster" />
                        </div>
                        <div className="filmInfo">
                            <h2>{title}</h2>
                            <p>User Score: {(vote_average * 10).toFixed()}%</p>
                            <h3>Overview</h3>
                            <p>{overview}</p>
                            <h4>Genres</h4>
                            <ul className={css.genresList}>
                                {genres &&
                                    genres.length &&
                                    genres.map(({ id, name }) => {
                                        return <li key={id}>{name}</li>
                                    })}
                            </ul>
                        </div>
                    
                    </div>
                    <div className={css.additionalInfo}>
                        <h4 className="additionalTitle">Additional information</h4>
                        <ul>
                            <li>
                                <Link to="cast" state={{ from: location.state?.from }}>Cast</Link>
                            </li>
                            <li>
                                <Link to="reviews" state={{ from: location.state?.from }}>Reviews</Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <Outlet />
                    </div>
                </>
            }
        </>
    );
};