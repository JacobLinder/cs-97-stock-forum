import React from 'react';
import { Link } from 'react-router-dom';
import "./Actions.css";
import Button from '../../button/Button';

export default function Actions() {
  return (
    <div className="actions">
      <Link to='../pages/landing'>
        <Button label="Hi, Username!"/>
        <Button label="Sign Out"/>
      </Link>
    </div>
  );
}