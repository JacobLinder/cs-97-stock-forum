import React from 'react';
import ReactDOM from 'react-dom';
import './CommentPage.css';
import { Link } from 'react-router-dom';



function CommentDate(props) {
  return <span className="CommentDate">{props.date}</span>;
}

function CommentText(props){
  return <span className="CommentText">{props.text}</span>;
}

function CommentTicker(props){
  return <span className="CommentTicker">{props.ticker}</span>
}

function CommentBox(props) {
  return <div className="CommentBox">
    <div className="Head">Egg at <CommentDate date={props.date}/> on <CommentTicker ticker={props.ticker}/>:</div>
    <CommentText text={props.text}/>

  </div>;
}





export default function CommentPage() {
  const data = [ { text: 'I like the stock', ticker: 'AAPL', timestamp: '02:02:02' }, { text: 'I hate the stock', ticker: 'TSLA', timestamp: '01:01:01'}]
  const listItems = data.map((d) => <CommentBox date={d.timestamp} text={d.text} ticker={d.ticker}></CommentBox>);

  return(
    <>
      <center>
        <h2>User's Comment Page</h2>
        <Link to='/stock-page'>
          <button className="OtherPage">
            Stock Page
          </button>
        </Link>
        <div>{listItems}</div>

      </center>
    </>
  );
}
