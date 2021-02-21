import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import './index.css';
import App from './App';
import LandingPage from '../src/pages/LandingPage';
import SignIn from '../src/pages/SignIn';
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
          path="/landing-page"
          render={(props) => <LandingPage {...props} />}
        />
        <Route
          path="/index"
          render={(props) => <LandingPage {...props} />}
        />
        <Route
          path="/sign-in"
          render={(props) => <SignIn {...props} />}
        />
        <Route
          path="/create-account"
          render={(props) => <CreateAccount {...props} />}
        />
        <Route
          path="/homepage"
          render={(props) => <Homepage {...props} />}
        />
        <Route
          path="/comment-page"
          render={(props) => <CommentPage {...props} />}
        />
        <Route
          path="/stock-page"
          render={(props) => <StockPage {...props} />}
        />
        <Redirect to="/index" />
        <Redirect from="/" to="/index" />
      </Switch>
    </Switch>
  </BrowserRouter>,
  rootElement
);
  

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
