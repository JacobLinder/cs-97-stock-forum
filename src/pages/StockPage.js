import React, { useState, useEffect } from 'react';
import { Link, Redirect, useHistory } from 'react-router-dom';
import { Paper, Button } from '@material-ui/core'
import './Pages.css';
import Chat from '../components/StockPageChat/StockPageChat'
import firebase from 'firebase/app';
import Navbar from "../components/navbar/Navbar";

export default function StockPage(props) {

  const [user, setUser] = useState(null);
  const stock = props.location.search.replace('?', '');

  useEffect(() => {
    firebase.auth().onAuthStateChanged((firebaseUser) => {
      if (firebaseUser) {
        setUser(firebaseUser);
      } else {
        const history = useHistory();
        history.push('/landing');
      }
    })
  }, []);


  const paperStyle = {
    margin:50,
    padding:20
  }
  return(
    <>
      <Navbar></Navbar>
      <Link to="/Home">
        <Button>Home</Button>
      </Link>
      <div style={{clear:'both'}}>
        <center>
          <h2>{stock}</h2>
        </center>
      </div>
      {user ? 
        <Paper style={paperStyle}>
          <Chat
            user={ user }
            stock={ stock }
          />
        </Paper>
      : null}
    </>
  );
}
