import React from 'react';
import { Link } from 'react-router-dom';
import { Paper } from '@material-ui/core'
import Chat from '../components/StockPageChat/StockPageChat'

export default function StockPage() {

  const user = "user";
  const stock = "ticker";
  return(
    <>
      <center>
        <h2>Stock Page</h2>
        <Link to='/landing-page'>
          <button>
            Landing Page
          </button>
        </Link>
      </center>
      <Paper style={{margin: 50}}>
          <Chat
            user={ user }
            stock={ stock }
          />
      </Paper>
    </>
  );
}
