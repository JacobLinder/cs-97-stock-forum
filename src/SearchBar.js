import React from "react";
import Select from "react-select";
import ReactDOM from 'react-dom';
import tickers from './functions/tickers';

const SearchBar = () => (
  <Select options={tickers} />
)

const rootElement = document.getElementById('root');
ReactDOM.render(<SearchBar />, rootElement);
