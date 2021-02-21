import React from 'react';
import { Link } from 'react-router-dom';

export default function LandingPage() {
  return(
    <>
      <center>
        <h2>Landing Page</h2>
        <Link to='/sign-in'>
          <button>
            Sign In
          </button>
        </Link>
      </center>
    </>
  );
}
