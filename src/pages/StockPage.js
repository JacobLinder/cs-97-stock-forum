import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Paper } from '@material-ui/core'
import './Pages.css';
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


  const paperStyle = {
    margin:50,
    padding:20
  }
  return(
    <>
      <div>
        <Link to='/home'>
          <button style={{float:'left'}}className="OtherPage">
            Home Page
          </button>
        </Link>
        <Link to='/landing-page'>
          <button style={{float:'right'}}className="OtherPage">
            Sign Out
          </button>
        </Link>
      </div>
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
