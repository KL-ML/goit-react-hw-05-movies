import React, { useState } from "react";
import { toast } from "react-toastify";
import css from './SearchForm.module.css';

export const SearchForm = ({onSubmit, searchQueryUrl}) => {
    const [value, setValue] = useState(searchQueryUrl);

    const handleInput = e => {
        setValue(e.target.value.toLowerCase());
    }

    const handleSubmit = e => {
        e.preventDefault();

        if (value.trim() === '') {
            toast.error("Enter search value !");
            return;
        }
        onSubmit(value);
    }

    return (
        <form onSubmit={handleSubmit}>            
            <input
                type="text"
                name="searchValue"
                value={value}
                onChange={handleInput}
                autoComplete="off"
                autoFocus
                placeholder="Search movies"
                className={css.searchInput}
            />            
            <button className={css.searchBtn} type="submit">Search</button>
        </form>
    );
}