import { SearchForm } from "components/SearchForm";
import React, {useEffect, useState} from "react";
import { Link } from "react-router-dom";

const filmId = 12;
//Тут робимо запит на бекенд для отримання списку фільмів по пошуку

const Movies = () => {
    const [movies, setMovies] = useState(null);
    const [searchQuery, setSerchQuery] = useState('')
    const search = '/search/movie';

    const handleFormSubmit = searchQuery => {
        setSerchQuery(searchQuery);
        console.log('searchQuery:', searchQuery);
  }

    useEffect(() => {

    })
   
    return (
        <>
            <SearchForm onSubmit={handleFormSubmit}/>
            {/* <h2>Trending today</h2> */}
            <ul>
                <li>
                    <Link to="12">{searchQuery}</Link>
                </li>
                <li>Movie 2</li>
                <li>Movie 3</li>
                <li>Movie 4</li>
                <li>Movie 5</li>
                <li>Movie 6</li>
                <li>Movie 7</li>
                <li>Movie 8</li>
                <li>Movie 9</li>
                <li>Movie 10</li>
            </ul>
        </>
    )
};

export default Movies;