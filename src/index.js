import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { createBrowserHistory } from 'history';

// Using a temporary styling from bootstrap
// replaced import './index.css'
import "bootstrap/dist/css/bootstrap.min.css"

// Using container from bootstrap to keep sign up form
// resizable
import { Container } from 'react-bootstrap'

import App from './App';
import LandingPage from '../src/pages/LandingPage';
import SignIn from './pages/SignIn';
import CreateAccount from '../src/pages/CreateAccount';
import Homepage from '../src/pages/Homepage';
import CommentPage from '../src/pages/CommentPage';
import StockPage from '../src/pages/StockPage';
import reportWebVitals from './reportWebVitals';

const hist = createBrowserHistory();
const rootElement = document.getElementById("root");
ReactDOM.render(
  <BrowserRouter history={hist}>
    <Switch>
      <Switch>
        <Route
          path="/landing"
          render={(props) => <LandingPage {...props} />}
        />
        
        <Route
          path="/sign-in"
          render={(props) => 

          // adding flexing style
          <Container className="d-flex align-items-center justify-content-center"
            style={{ minHeight: "100vh"}}>
            <div className="w-100" style={{ maxWidth: "400px"}}>
              <SignIn {...props} />
            </div>
          </Container>
          }
        />
        <Route
          path="/create-account"
          render={(props) =>
          // adding flexing style

          <Container className="d-flex align-items-center justify-content-center"
          style={{ minHeight: "100vh"}}>
            <div className="w-100" style={{ maxWidth: "400px"}}>
              <CreateAccount {...props} />
            </div>
          </Container>
          
          }
        />


        <Route
          path="/home"
          render={(props) => <Homepage {...props} />}
        />
        <Route
          path="/comments"
          render={(props) => <CommentPage {...props} />}
        />
        <Route
          path="/stocks"
          render={(props) => <StockPage {...props} />}
        />
        <Redirect to="/landing" />
        <Redirect from="/index" to="/landing" />
        <Redirect from="/" to="/landing" />
      </Switch>
    </Switch>
  </BrowserRouter>,
  rootElement
);
  

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
