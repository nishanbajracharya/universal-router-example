import { Provider } from 'react-redux';
import React, { Component } from 'react';
import { injectGlobal } from 'styled-components'

import store from './store';

injectGlobal`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: sans-serif;
  }
`

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
