import React from 'react';
import { Link } from 'react-router-dom';

import "./Logo.css";

export default function Logo() {
  return (
    <div className="logo hoverable">
        <img src='/assets/stockpic.png' />
        <span>StockForum</span>
    </div>
  );
}