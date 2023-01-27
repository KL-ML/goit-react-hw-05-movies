import React from "react";
// import { Link } from "react-router-dom";

export const MovieDetails = () => {
    return (
        <>
            {/* <Link to="movies">Go back</Link> */}
            <div className="filmCard">
                <div className="imgThumb">
                    <img src='' alt='' />
                </div>
                <div className="filmInfo">
                    <h2>Movie name</h2>
                    <p>User Score: 75%</p>
                    <h3>Overview</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, dolorem repellat eius quasi molestias iure. Ab nihil non aut sint reiciendis recusandae, alias architecto dolore fugiat repellendus doloribus laudantium provident.</p>
                    <h4>Genres</h4>
                    <p>Drama, History, War</p>
                </div>
            </div>
            <div className="additionalInfo">
                <p className="additionalTitle">Additional information</p>
                <ul>
                    <li>Cast</li>
                    <li>Reviews</li>
                </ul>
            </div>
        </>
    );
};