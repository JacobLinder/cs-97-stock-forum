import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ImageCard from '../components/ImageCard';
import landingbuttons from '../static/landingbuttons';

const useStyles = makeStyles((theme) => ({
  root:{
    minHeight:'100vh',
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
  },
}));
export default function () {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <ImageCard landingbutton={landingbuttons[0]} />
      <ImageCard landingbutton={landingbuttons[1]} />
    </div>
  );
}