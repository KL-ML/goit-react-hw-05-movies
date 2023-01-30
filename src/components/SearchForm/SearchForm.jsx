import React, { useState } from "react";
import { toast } from "react-toastify";

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
            />            
            <button type="submit">Search</button>
        </form>
    );
}