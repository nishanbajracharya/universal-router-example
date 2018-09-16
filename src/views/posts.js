import React from 'react';
import { connect } from 'react-redux';

import Link from '../components/link';

const Posts = ({ list = [], data = {}, routeProps = {} }) => (
  <div>
    {list.map((item, index) => (
      <div key={index}>
        <p>{data[item].title}</p>
        <p>
          {data[item].desc}{' '}
          <Link to={`${routeProps.pathname}/${item}`}>more</Link>
        </p>
      </div>
    ))}
  </div>
);

export default connect(state => ({
  list: state.posts.list,
  data: state.posts.data
}))(Posts);
