import { Provider } from 'react-redux';
import React, { Component } from 'react';
import { injectGlobal } from 'styled-components'

import store from './store';

import 'normalize.css';

injectGlobal`
  body {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica,
      Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  }
`;

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <p>Hello World</p>
      </Provider>
    );
  }
}

export default App;
