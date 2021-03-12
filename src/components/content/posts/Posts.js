import React, { useState, useEffect } from 'react';
import Stock from './Stock';
import { Content, Loading } from './Posts.styles'
import { getUsers } from './API';
import { getFollowedStocks } from '../../../functions/stock-interactions';
import './Posts.css';
import firebase from 'firebase/app';
import HomepagePost from '../../../HomePagePost';
import tickers from '../../../functions/tickers.js';

function Posts(props) {
  const [page, setPage] = useState(1);
  const [stocks, setStocks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState({});

  var all = [];
  var i;
  all = tickers.slice(0, 10).map((ticker, key) => {return (ticker.label)});
  //const listItems = tickers.map((d) => {d.label});
  /*for(i = 0; i<10; i++){
    all.push(tickers[i]);
  }*/
  console.log(all);
  //const itemList = JSON.parse(all.label);


  var pickPage = props.portion;

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
        if(pickPage === 1) setStocks(newStocks);
        else {setStocks(all)};
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