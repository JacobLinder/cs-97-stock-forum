import React from 'react';
import { Link } from 'react-router-dom';

export default function SignIn() {
  return(
    <>
      <center>
        <h2>Sign In</h2>
        <Link to='/create-account'>
          <button>
            Create Account
          </button>
        </Link>
      </center>
    </>
  );
}
