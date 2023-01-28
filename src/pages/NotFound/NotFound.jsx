import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <>
            <p>This page is not found. Please visit <Link to=''>Home page</Link></p>
        </>
    )
}

export default NotFound;