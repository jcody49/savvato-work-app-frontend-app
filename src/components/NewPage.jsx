import React from "react";
import { Link } from "react-router-dom";

export default function NewPage() {
    return (
      <div>
        <h2>New Page</h2>
        <p>This is a new page.</p>
          <Link to="/" className="App-link">Go to Home</Link>
      </div>
    );
  }