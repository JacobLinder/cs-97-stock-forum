import React from 'react';
import ReactDOM from 'react-dom';
import './CommentPage.css';
import { Link } from 'react-router-dom';
import { ArrowRightAltOutlined } from '@material-ui/icons';

const username = "Egg";

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
    <div className="Head">{username} at <CommentDate date={props.date}/> on <CommentTicker ticker={props.ticker}/>:</div>
    <CommentText text={props.text}/>

  </div>;
}





export default function CommentPage() {
  const data = [ { text: 'I like the stock', ticker: 'AAPL', timestamp: '02:02:02' }, { text: 'I hate the stock', ticker: 'TSLA', timestamp: '01:01:01'}]
  const listItems = data.map((d) => <CommentBox date={d.timestamp} text={d.text} ticker={d.ticker}></CommentBox>);

  return(
    <>
      <left>

      </left>
      <div>
        <Link to='/homepage'>
          <button style={{float: 'left'}} className="OtherPage">
            Home Page
          </button>
        </Link>
        <Link to='/landing-page'>
          <button style={{float: 'right'}} className="OtherPage">
                Sign Out
          </button>
        </Link>
      </div>
      <div style={{clear:'both'}}>
        <center>
          <h2>{username}'s Comment Page</h2>

          <div>{listItems}</div>

        </center>
      </div>
    </>
  );
}
