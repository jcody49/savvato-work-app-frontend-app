import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
    return (
        <div>
        <h2>Home</h2>
        <p>Welcome to the home page.</p>
            <Link to="/new-page" className="App-link">Go to New Page</Link>
        </div>
    );
}
