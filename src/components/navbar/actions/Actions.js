import React from 'react';
import { Link } from 'react-router-dom';
import "./Actions.css";
import Button from '../../button/Button';

export default function Actions() {
  return (
    <div className="actions">
      <Button label="Hi, Username!"/>
      <Link to='../pages/landing'>
        <Button label="Sign Out"/>
      </Link>
    </div>
  );
}