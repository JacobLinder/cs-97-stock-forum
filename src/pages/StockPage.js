import React from 'react';
import { Link } from 'react-router-dom';

export default function StockPage() {
  return(
    <>
      <center>
        <h2>Stock Page</h2>
        <Link to='/landing-page'>
          <button>
            Landing Page
          </button>
        </Link>
      </center>
    </>
  );
}
