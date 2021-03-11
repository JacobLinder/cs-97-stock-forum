import React from 'react';

import "./Content.css";
import Bar from "./bar/Bar";

export default function Content() {
  return (
    <div className="content">
      <div className="bar-wrapper">
        <Bar />
      </div>
    </div>
  );
}