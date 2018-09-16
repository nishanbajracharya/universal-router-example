import React from 'react';
import { connect } from 'react-redux';

const PostDetail = ({ data = {}, routeProps = {} }) => (
  <div>
    <p>{data.title}</p>
    <p>{data.desc}</p>
  </div>
);

export default connect((state, props) => ({
  data: state.posts.data[props.routeProps.params.id]
}))(PostDetail);
