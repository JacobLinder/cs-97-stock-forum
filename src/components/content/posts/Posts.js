import React, { useState, useEffect } from 'react';
import Stock from './Stock';
import { Content, Loading } from './Posts.styles'
import { getUsers } from './API';
import { getFollowedStocks } from '../../../functions/stock-interactions';
import './Posts.css';
import firebase from 'firebase/app';
import HomepagePost from '../../../HomePagePost';

function Posts(props) {
  const [page, setPage] = useState(1);
  const [stocks, setStocks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState({});

  const handleScroll = event => {
    const { scrollTop, clientHeight, scrollHeight } = event.currentTarget;

    if(scrollHeight - scrollTop === clientHeight) {
      setPage(prev => prev + 1);
    }
  }

  useEffect(async() => {
    const loadUsers = async () => {
      setLoading(true);
      firebase.auth().onAuthStateChanged(async(firebaseUser) => {
        setUser(firebaseUser);
        const newStocks = await getFollowedStocks(firebaseUser.uid);
        setStocks(newStocks);
        setLoading(false);
      });
    }
    loadUsers();
  }, []);

  // useEffect(async() => {
  //   const loadUsers = async () => {
  //     setLoading(true);
  //     const newStocks = props.portion === 0 ? await getAllStocks(user.uid)
  //       : props.portion === 1 ? await getFollowedStocks(user.uid)
  //       : props.portion === 2 ? await getUnfollowedStocks(user.uid)
  //       : [];
  //     setStocks(newStocks);
  //     setLoading(false);
  //   }
  //   loadUsers();
  // }, [props.portion]);

  return (
    <div className='App'>
      <Content onScroll={handleScroll}>
        {stocks && stocks.map(stock => <HomepagePost ticker={stock} />)}
      </Content>
      {loading && <Loading>Loading ...</Loading>}
    </div>
  );
}

export default Posts;