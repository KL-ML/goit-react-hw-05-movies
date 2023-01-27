import React from "react";
import { NavLink } from 'react-router-dom';
import css from './Navigation.module.css';

const getActiveClassName = ({ isActive }) => {
    return isActive
        ? css.active
        : css.btn;
};

export const Navigation = () => {
    return (
        <>
            <NavLink className={getActiveClassName} to='/'>Home</NavLink>
            <NavLink className={getActiveClassName} to='/movies'>Movies</NavLink>
        </>
    );
}