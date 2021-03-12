import React, { useState, useEffect } from 'react';
import { getUserComments } from '../functions/comments.js';
import { getUsername } from '../functions/auth.js';
import ReactDOM from 'react-dom';
import './CommentPage.css';
import { Link } from 'react-router-dom';
import { Grid, Box, Button, ButtonGroup } from '@material-ui/core';
import { ArrowRightAltOutlined } from '@material-ui/icons';
import { Card, Container } from "react-bootstrap"; 
import firebase from 'firebase/app';
import 'firebase/auth';

function CommentDate(props) {
  const date = new Date(props.date.seconds * 1000);
  return <span className="CommentDate">{date.toLocaleDateString('en')}</span>;
}

function CommentText(props){
  return <span className="CommentText">{props.text}</span>;
}

function CommentTicker(props){
  return <span className="CommentTicker">{props.ticker}</span>;
}

function CommentUser(props){
  //add an href here if we would like to link author name to profile
  return<span class="CommentUser"><a class="author">{props.username}</a></span>;
}

function CommentBox(props) {
  return <Container fluid>
    <div className="Head"><CommentUser username={props.username}/> <span className="Tail"><CommentDate date={props.date}/> on <CommentTicker ticker={props.ticker}/></span></div>
    <CommentText text={props.text}/>
    <hr/>
  </Container>;
}

export default function CommentPage(props) {

  const [data, setData] = useState([]);
  const [username, setUsername] = useState("");

  useEffect(async() => {
    const uid = props.location.data;
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
          {username !== "" ?
            <h2>{username}'s Comment Page</h2>
          : null}
        </center>
        <hr/>
        <div>{listItems}</div>
      </div>
    </>
  );
}
