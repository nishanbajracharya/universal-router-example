import React from 'react';

import history from '../history';

export default class Link extends React.Component {
  handleClick = (event, to, state) => {
    event.preventDefault();

    history.push(to, state);
  };
  render() {
    const { to, children, state, ...props } = this.props;
    return (
      <a href={to} {...props} onClick={e => this.handleClick(e, to, state)}>
        {children}
      </a>
    );
  }
}
