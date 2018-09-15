import React from 'react';

import Link from '../components/link';

const Home = () => (
  <div>
    Home <a href="https://www.google.com">External</a>
    <Link to="/posts">Posts</Link>
  </div>
);

export default Home;
