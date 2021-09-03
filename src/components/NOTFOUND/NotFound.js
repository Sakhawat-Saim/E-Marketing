import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div style={{textAlign: 'center', margin: '5%'}}>
            <Link to="/">Go to Home</Link>
        </div>
    );
};

export default NotFound;