import React from 'react';
import { Wrapper } from './Stock.styles.js';

const User = ({ user }) => <Wrapper>{user.email}</Wrapper>;

export default User;