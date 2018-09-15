import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { injectGlobal } from 'styled-components';

import 'normalize.css';

import store from './store';
import router from './router';
import history from './history';

import registerServiceWorker from './registerServiceWorker';

injectGlobal`
  body {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica,
    Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  }
  `;

const container = document.getElementById('root');

export const render = async (location, action) => {
  console.log(location, action)
  const page = await router.resolve(window.location.pathname);
  ReactDOM.render(<Provider store={store}>{page}</Provider>, container);
}

render();

history.listen(render);

registerServiceWorker();
