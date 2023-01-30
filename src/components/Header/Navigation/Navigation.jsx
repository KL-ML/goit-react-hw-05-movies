import React from "react";
import { NavLink } from 'react-router-dom';
import css from './Navigation.module.css';

const getActiveClassName = ({ isActive }) => {
    return isActive
        ? css.active
        : css.nav;
};

export const Navigation = () => {
    return (
        <div className={css.navThumb}>
            <NavLink className={getActiveClassName} to='/'>Home</NavLink>
            <NavLink className={getActiveClassName} to='/movies'>Movies</NavLink>
        </div>
    );
}