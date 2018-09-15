import { Provider } from 'react-redux';
import React, { Component } from 'react';

import store from './store';

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
