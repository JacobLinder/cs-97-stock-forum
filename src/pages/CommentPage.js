import React, { useState, useEffect } from 'react';
import { getUserComments } from '../functions/comments.js';
import { getUsername } from '../functions/auth.js';
import ReactDOM from 'react-dom';
import './CommentPage.css';
import { Link } from 'react-router-dom';
import { ArrowRightAltOutlined } from '@material-ui/icons';

function CommentDate(props) {
  const date = new Date(props.date.seconds * 1000);
  return <span className="CommentDate">{date.toLocaleDateString('en')}</span>;
}

function CommentText(props){
  return <span className="CommentText">{props.text}</span>;
}

function CommentTicker(props){
  return <span className="CommentTicker">{props.ticker}</span>
}

function CommentBox(props) {
  return <div className="CommentBox">
    <div className="Head">{props.username} at <CommentDate date={props.date}/> on <CommentTicker ticker={props.ticker}/>:</div>
    <CommentText text={props.text}/>
  </div>;
}

export default function CommentPage() {

  const [data, setData] = useState([]);
  const [username, setUsername] = useState("");

  useEffect(async() => {
    const uid = window.location.search;
    const comments = await getUserComments(uid);
    const name = await getUsername(uid);
    setData(comments);
    setUsername(name);
  }, []);
  
  const listItems = data.map((d) => <CommentBox username={username} date={d.timestamp} text={d.text} ticker={d.ticker}></CommentBox>);

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
