import React from 'react';
import { Link } from 'react-router-dom';

export default function CreateAccount() {
  return(
    <>
      <center>
        <h2>Create Account</h2>
        <Link to='/homepage'>
          <button>
            Homepage
          </button>
        </Link>
      </center>
    </>
  );
}
