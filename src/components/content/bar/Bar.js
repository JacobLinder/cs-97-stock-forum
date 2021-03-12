import React, { useState } from 'react';

import './Bar.css';
import Posts from '../posts/Posts';

export default function Bar() {
  const [portion, setPortion] = useState(0); //0 for all, 1 for followed, 2 for unfollowed

  return (
  <div className="bar">
    <span className="view-stocks-title">View stocks</span>

    <div className="filter-container">
      <div
        className="filter-element hoverable"
        style={portion === 0 ? {backgroundColor: 'purple', color: 'white'} : {}}
      >
        <span onClick={() => setPortion(0)}>ALL</span>
      </div>
      <div
        className="filter-element hoverable"
        style={portion === 1 ? {backgroundColor: 'purple', color: 'white'} : {}}
      >
        <span onClick={() => setPortion(1)}>FOLLOWED</span>
      </div>
    </div>

    <Posts portion={portion} />
  </div>
  );
}