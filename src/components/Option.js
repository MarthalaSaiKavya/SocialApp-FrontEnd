import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from React Router

const Option = () => {
    return (
        <div className="container">
            <Link to="/home" style={{ margin: '10% 1%' }} className="btn btn-primary">Home</Link>
            <Link to="/create" style={{ margin: '10% 1%' }} className="btn btn-primary">Create a Post!</Link>
        </div>
    );
}

export default Option;
