import React from 'react';
import PropTypes from 'prop-types';
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

Posts.propTypes = {
  list: PropTypes.array,
  data: PropTypes.object,
  routeProps: PropTypes.object
};

export default connect(state => ({
  list: state.posts.list,
  data: state.posts.data
}))(Posts);
