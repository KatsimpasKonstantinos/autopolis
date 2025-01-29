import React from 'react';
import { Link } from 'react-router-dom';

function Landing_Page() {
    return (
        <div>
            <h1>Welcome to the landing page!</h1>
            <Link to="/select_game">Select a game</Link>
        </div>
    );
}

export default Landing_Page;