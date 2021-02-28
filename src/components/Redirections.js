import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ImageCard from '../components/ImageCard';
import landingbuttons from '../static/landingbuttons';
import useWindowPosition from '../hook/useWindowPosition';

const useStyles = makeStyles((theme) => ({
  root:{
    minHeight:'100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
}));
export default function () {
  const classes = useStyles();
  const checked = useWindowPosition('header');
  return (
    <div className={classes.root}>
      <ImageCard landingbutton={landingbuttons[0]} checked={checked} />
      <ImageCard landingbutton={landingbuttons[1]} checked={checked} />
    </div>
  );
}