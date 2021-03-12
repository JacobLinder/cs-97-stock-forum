import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';
import Header from '../components/Header';
import Redirections from '../components/Redirections';
import { Link } from 'react-router-dom';
import Button from '../components/button/Button';

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
      <Link to={{pathname: '/comments', search: '04aIuvjEc2ZbHTLQTXIzO8CR0Xh2'}}>
        <Button>comments</Button>
      </Link>
      <Link to={{pathname: '/stocks', search: 'AAPL'}}>
        <Button>stocks</Button>
      </Link>
      <br/><br/><br/><br/><br/><br/>
    </center>
    </div>
  );
}
