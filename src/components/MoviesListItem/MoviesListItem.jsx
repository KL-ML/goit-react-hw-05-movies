import React from "react";
import { Link, useLocation } from "react-router-dom";

export const MoviesListItem = ({ movie }) => {
    const location = useLocation();

    return (
        <li key={movie.id}>
            <Link
                to={`/movies/${movie.id}`}
                state={{from: location}}
            >
                {movie.title}
            </Link>
        </li>
    );
}