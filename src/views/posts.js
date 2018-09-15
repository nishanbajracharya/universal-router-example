import React from 'react';

const Posts = ({
  routeProps
}) => <div>
  Posts {routeProps.params.id}
  {routeProps.params.commentId && <p>Comment {routeProps.params.commentId}</p>}
  </div>;

export default Posts;