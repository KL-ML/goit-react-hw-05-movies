import React from "react";
import { Navigation } from "../Navigation";
import css from './Sidebar.module.css';

export const Sidebar = () => {
    return (
        <div className={css.sidebar}>
            <Navigation />
        </div>
    )
}