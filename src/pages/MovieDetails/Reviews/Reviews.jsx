import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovies } from "services/movies.api";
import { toast } from "react-toastify";
import css from './Reviews.module.css';

const Reviews = () => {
    const [review, setReview] = useState('');
    const { movieId } = useParams();
    const purpose = `/movie/${movieId}/reviews`;

    useEffect(() => {
        const fetchData = async (params, purpose) => {
            // setLoading(true);
            try {
                const data = await getMovies(params, purpose);
                setReview(data.results);
            } catch (error) {
                toast.error(error);
            }
        };
        fetchData({}, purpose);
    }, [purpose]);

    return (
        <>
            <ul className={css.reviewList}>
                {review && review.length > 0
                    ? review.map(({ author, content, id }) => (
                        <li key={id}>
                            <h3>{author}</h3>
                            <p>{content}</p>
                        </li>
                    ))
                    : "Sorry, we don't have any review for this movie"}
            </ul>
        </>
    );
};

export default Reviews;