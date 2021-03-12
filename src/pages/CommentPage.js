import React, { useState, useEffect } from 'react';
import { getUserComments } from '../functions/comments.js';
import { getUsername } from '../functions/auth.js';
import ReactDOM from 'react-dom';
import './Pages.css';
import { Grid, Box, Button, ButtonGroup, Paper } from '@material-ui/core';
import { ArrowRightAltOutlined } from '@material-ui/icons';
import { Card, Container } from "react-bootstrap"; 
import firebase from 'firebase/app';
import 'firebase/auth';
import { Link, Redirect, useHistory } from 'react-router-dom';

import Navbar from "../components/navbar/Navbar";


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

  const paperStyle = {
    margin:50,
    padding:10
  }

  useEffect(async() => {
    firebase.auth().onAuthStateChanged((firebaseUser) => {
      if (!firebaseUser) {
        window.location.pathname = '/landing';
      }
    });
    const uid = props.location.search.replace('?', '');
    const comments = await getUserComments(uid);
    const name = await getUsername(uid);
    setData(comments);
    setUsername(name);
  }, []);
  
  const listItems = !data.length? "User has no comments" : data.map((d) => <CommentBox username={username} date={d.timestamp} text={d.text} ticker={d.ticker}></CommentBox>);

  return(
    <>
      <Navbar></Navbar>
      <Link to="/Home">
        <Button>Home</Button>
      </Link>
      <div style={{clear:'both'}}>
        <center>
          {username !== "" ?
            <h2>{username}'s Comment Page</h2>
          : null}
        </center>
        <Paper style={paperStyle}>{listItems}</Paper>
      </div>
    </>
  );
}
