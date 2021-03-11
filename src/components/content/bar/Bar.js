import React from 'react';

import './Bar.css';

export default function Bar() {
  return (
  <div className="bar">
    <span className="view-stocks-title">View stocks</span>

    <div className="filter-container">
      <div className="filter-element hoverable">
        <span>ALL</span>
      </div>
      <div className="filter-element hoverable">
        <span>FOLLOWED</span>
      </div>
      <div className="filter-element hoverable">
        <span>UNFOLLOWED</span>
      </div>
    </div>
  </div>
  );
}