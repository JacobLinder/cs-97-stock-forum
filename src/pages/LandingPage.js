import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';
import Header from '../components/Header';
import Redirections from '../components/Redirections';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root:{
    minHeight: '100vh',
    backgroundImage: `url(${process.env.PUBLIC_URL + '/assets/bg.jpeg'})`,
    backgroundRepeat:"no-repeat",
    backgroundSize: 'cover',
  },
}));

export default function LandingPage() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <CssBaseline />
      <Header />
      <Redirections />

    <center>
      <Link to={{pathname: '/comments', data: '04aIuvjEc2ZbHTLQTXIzO8CR0Xh2'}}>
        <button>hi</button>
      </Link>
      </center>
    </div>
  );
}
