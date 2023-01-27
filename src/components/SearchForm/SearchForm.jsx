import React, { useState } from "react";

export const SearchForm = ({onSubmit}) => {
    const [value, setValue] = useState('');

    const handleInput = e => {
        setValue(e.target.value.toLowerCase());
        console.log('value', e.target.value)
    }

    const handleSubmit = e => {
        e.preventDefault();

        if (value.trim() === '') {
            console.log("Enter search value !");
            // toast.error("Enter search value !");
            return;
        }

        onSubmit(value);
        setValue('');
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