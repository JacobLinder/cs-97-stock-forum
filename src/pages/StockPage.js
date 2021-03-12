import React, { useState, useEffect } from 'react';
import { Link, Redirect, useHistory } from 'react-router-dom';
import { Card, Button } from '@material-ui/core'
import './Pages.css';
import Chat from '../components/StockPageChat/StockPageChat';
import HomepagePost from '../HomePagePost'
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
        window.location.pathname = '/landing';
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
        <HomepagePost ticker={stock}/>
      </div>
      {user ? 
        <Card style={paperStyle}>
          <Chat
            user={ user }
            stock={ stock }
          />
        </Card>
      : null}
    </>
  );
}
