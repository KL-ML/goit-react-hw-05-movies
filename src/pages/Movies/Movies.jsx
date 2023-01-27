import React from "react";
import { Link } from "react-router-dom";

const filmId = 12;
//Тут робимо запит на бекенд для отримання списку фільмів по пошуку

export const Movies = () => {
    return (
        <>
            <form>
                <label>
                    <input />
                </label>
                <button type="submit">Search</button>
            </form>
            {/* <h2>Trending today</h2> */}
            <ul>
                <li>
                    <Link to="12">Movie 1</Link>
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