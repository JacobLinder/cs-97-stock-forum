import React from 'react';
import { Link } from 'react-router-dom';

function Comment({text, ticker, timestamp}){
  return(
    <>
      <div>{timestamp}</div>
      <div>
        {ticker}: {text}
      </div>
    </>
  );
}

export default function CommentPage() {
  const data = [ { text: 'I like the stock', ticker: 'AAPL', timestamp: '02:02:02' }, { text: 'I hate the stock', ticker: 'TSLA', timestamp: '01:01:01'}]
  const listItems = data.map((d) => <li key={d.text}>{d.timestamp} <br/>{d.ticker}: {d.text}</li>);

  return(
    <>
      <center>
        <h2>User's Comment Page</h2>
        <Link to='/stock-page'>
          <button>
            Stock Page
          </button>
        </Link>
        <div>{listItems}</div>
      </center>
    </>
  );
}
