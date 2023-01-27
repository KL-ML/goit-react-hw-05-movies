import React from "react";
import { Link } from "react-router-dom";

export const MoviesListItem = ({ movie }) => {
    return (
        <li key={movie.id}>
            <Link to={`${movie.id}`}>{movie.title}</Link>
        </li>
    );
}