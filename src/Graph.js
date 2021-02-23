import { csv } from 'd3';
import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { VictoryLine, VictoryChart } from 'victory';

const CSV = '/data/SPY.csv';

const Graph = () => {
  const [price, setPrice] = useState([]);
  
  useEffect(() => { 
    csv(CSV, (ticker) => { return +ticker.Price; } )
      .then(setPrice); }, []);
  
  return (
    <VictoryChart width='1000' height='500'>
    <VictoryLine data={price} x='Date' y='Price' />
    </VictoryChart>
  );
};

const rootElement = document.getElementById('root');
ReactDOM.render(<Graph />, rootElement);
