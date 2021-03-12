import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Paper } from '@material-ui/core'
import Chat from '../components/StockPageChat/StockPageChat'
import firebase from 'firebase/app';

export default function StockPage(props) {

  const [user, setUser] = useState(null);
  const stock = props.location.search.replace('?', '');

  useEffect(() => {
    firebase.auth().onAuthStateChanged((firebaseUser) => {
      setUser(firebaseUser);
    })
  }, []);

  return(
    <>
      <center>
        <h2>{stock} Stock Page</h2>
        <Link to='/landing-page'>
          <button>
            Landing Page
          </button>
        </Link>
      </center>
      {user ? 
        <Paper style={{margin: 50}}>
          <Chat
            user={ user }
            stock={ stock }
          />
        </Paper>
      : null}
    </>
  );
}
