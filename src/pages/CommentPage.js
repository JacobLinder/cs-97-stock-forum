import React from 'react';
import { Link } from 'react-router-dom';

export default function CommentPage() {
  return(
    <>
      <center>
        <h2>Comment Page</h2>
        <Link to='/stock-page'>
          <button>
            Stock Page
          </button>
        </Link>
      </center>
    </>
  );
}
