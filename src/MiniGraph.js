import { csv } from 'd3';
import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { VictoryLine, VictoryChart } from 'Victory';

const CSV = 'SPY.csv';

const Graph = () => {
  const [price, setPrice] = useState([]);
  
  useEffect(() => { 
    csv(CSV, (ticker) => { return +ticker.Price; } )
      .then(setPrice); }, []);
  
  return (
    <VictoryChart width='600' height='300'>
    <VictoryLine data={price} x='Date' y='Price' />
    </VictoryChart>
  );
};

const rootElement = document.getElementById('root');
ReactDOM.render(<Graph />, rootElement);
