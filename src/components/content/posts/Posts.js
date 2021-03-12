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

  const handleScroll = event => {
    const { scrollTop, clientHeight, scrollHeight } = event.currentTarget;

    if(scrollHeight - scrollTop === clientHeight) {
      setPage(prev => prev + 1);
    }
  }

  useEffect(async() => {
    const loadUsers = async () => {
      setLoading(true);
      firebase.auth().onAuthStateChanged(async(user) => {
        const newStocks = await getFollowedStocks(user.uid);
        setStocks(newStocks);
        setLoading(false);
      });

    }
    loadUsers();
  }, []);

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