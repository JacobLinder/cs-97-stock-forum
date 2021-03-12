import React from 'react';
import { Link } from 'react-router-dom';
import { Paper } from '@material-ui/core'
import './Pages.css';
import Chat from '../components/StockPageChat/StockPageChat'

export default function StockPage() {

  const user = "user";
  const stock = "ticker";
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
      <Paper style={paperStyle}>
          <Chat
            user={ user }
            stock={ stock }
          />
      </Paper>
    </>
  );
}
