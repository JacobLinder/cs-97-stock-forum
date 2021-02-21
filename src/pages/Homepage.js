import React from 'react';
import { Link } from 'react-router-dom';

export default function Homepage() {
  return(
    <>
      <center>
        <h2>Homepage</h2>
        <Link to='/comment-page'>
          <button>
            Comment Page
          </button>
        </Link>
      </center>
    </>
  );
}
