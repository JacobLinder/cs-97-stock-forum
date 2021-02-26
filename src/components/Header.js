import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, IconButton, Toolbar, Collapse } from '@material-ui/core';
import SortIcon from '@material-ui/icons/Sort';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme) => ({
    root:{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      fontFamily: 'Nunito',
    },
  appbar:{
    background: 'none',
  },
  appbarWrapper:{
    width:"88%",
    margin:'0 auto',
  },
  appbarTitle:{
    flexGrow: '1',
    fontSize: '1.9rem'
  },
  icon:{
    color: '#fff',
    fontSize: '2rem',
  },
  colorText:{
    color:"#7D41FF",
  },
  container:{
    textAlign: 'center',
  },
  title:{
    textAlign: 'center',
    color: '#fff',
    fontSize: '3.2rem',
  },
  goDown: {
    color: '#7D41FF',
    fontSize: '4rem',
  },
}));
export default function Header() {
  const classes = useStyles();
  const [checked,setChecked] = useState(false);
  useEffect(()=>{
    setChecked(true);
  },[])
  return (
    <div className={classes.root}>
      <AppBar className={classes.appbar} elevation={0}>
        <Toolbar className={classes.appbarWrapper}>
          <h1 className={classes.appbarTitle}>
            Stock<span className={classes.colorText}>Forum</span>
          </h1>
          <IconButton>
            <SortIcon className={classes.icon} />
          </IconButton>
        </Toolbar>
      </AppBar>

      <Collapse in={checked} {...(checked ? { timeout: 1500 } : {})} collapsedHeight={10}>
        <div className={classes.container}>
          <h1 className={classes.title}>
            Welcome to <br /> Stock
            <span className={classes.colorText}>Forum</span>
          </h1>
          <IconButton>
            <ExpandMoreIcon className={classes.goDown} />
          </IconButton>
        </div>
      </Collapse>
    </div>
  );
}