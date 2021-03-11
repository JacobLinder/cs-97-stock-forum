import React, { useState, useEffect } from 'react';
import Stock from './Stock';
import { Content, Loading } from './Posts.styles'
import { getUsers } from './API';

import './Posts.css';


function Posts() {
  const [page, setPage] = useState(1);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  const handleScroll = event => {
    const { scrollTop, clientHeight, scrollHeight } = event.currentTarget;

    if(scrollHeight - scrollTop === clientHeight) {
      setPage(prev => prev + 1);
    }
  }

  useEffect(() => {
    const loadUsers = async () => {
      setLoading(true);
      const newUsers = await getUsers(page);
      setUsers((prev) => [...prev, ...newUsers]);
      setLoading(false);
    }

    loadUsers();
  }, [page]);

  return (
    <div className='App'>
      <Content onScroll={handleScroll}>
        {users && users.map(user => <Stock key={user.cell} user={user} />)}
      </Content>
      {loading && <Loading>Loading ...</Loading>}
    </div>
  );
}

export default Posts;