import React from 'react';
import { Link } from 'react-router';

const ErrorPage = () => {
    return (
        <div>
            <h2>This page is not found </h2>
           <Link to='/' > go back</Link>
        </div>
    );
};

export default ErrorPage;