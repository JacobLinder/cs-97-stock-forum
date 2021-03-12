import { RowingSharp } from '@material-ui/icons';
import React, { useEffect } from 'react';
import Select from 'react-select';
import { Link, Redirect, useHistory} from 'react-router-dom';
import './Homepage.css';
import Landing from '../components/landing/Landing';
import '../HomePagePost.js';
import firebase from 'firebase/app';
import 'firebase/auth';
import Navbar from "../components/navbar/Navbar";
import Content from "../components/content/Content";

export default function Homepage() {
  
  useEffect(() => {
    firebase.auth().onAuthStateChanged((firebaseUser) => {
      if (!firebaseUser) {
        window.location.pathname = '/landing';
      }
    });
  }, []);

  return(
    <div>
      <Navbar />
      <Content />
    </div>
  );
}
