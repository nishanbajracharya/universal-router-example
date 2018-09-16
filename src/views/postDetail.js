import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const PostDetail = ({ data = {} }) => (
  <div>
    <p>{data.title}</p>
    <p>{data.desc}</p>
  </div>
);

PostDetail.propTypes = {
  data: PropTypes.object
};

export default connect((state, props) => ({
  data: state.posts.data[props.routeProps.params.id]
}))(PostDetail);
