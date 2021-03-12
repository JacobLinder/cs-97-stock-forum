import React, { useState, useEffect } from 'react';
import { Link, Redirect, useHistory } from 'react-router-dom';
import "./Actions.css";
import Button from '../../button/Button';
import firebase from 'firebase/app';
import { getUsername } from '../../../functions/auth.js';

export default function Actions(props) {

  const [username, setUsername] = useState("");
  const [uid, setUid] = useState("");

  useEffect(async() => {
    firebase.auth().onAuthStateChanged(async(user) => {
      if (user) {
        const name = await getUsername(user.uid);
        setUsername(name);
        setUid(user.uid);
      } else {
        const history = useHistory();
        history.push('/landing');
      }
    });
  }, []);

  const goToComments = () => {
    const history = useHistory();
    history.push({pathname: 'comments', search: uid});
  }

  const signOut = async() => {
    await firebase.auth().signOut();
    const history = useHistory();
    history.push('/landing');
  }

  return (
    <div className="actions">
      {username !== "" ?
        <div onClick={() => goToComments()}>
          <Button label={"Hi, " + username + "!"} />
        </div>
      : null}
      <div onClick={() => signOut()}>
        <Button label="Sign Out"/>
      </div>
    </div>
  );
}