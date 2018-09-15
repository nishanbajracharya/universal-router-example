import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { injectGlobal } from 'styled-components';

import 'normalize.css';

import store from './store';
import router from './router';

import registerServiceWorker from './registerServiceWorker';

injectGlobal`
  body {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica,
      Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  }
`;

const container = document.getElementById('root');

async function render() {
  const page = await router.resolve(window.location.pathname);
  ReactDOM.render(<Provider store={store}>{page}</Provider>, container);
}

render();

window.addEventListener('click', event => {
  if (event.target.tagName === 'A') {
    event.preventDefault();
    const anchor = event.target;
    const state = null;
    const title = anchor.textContent;
    const url = anchor.pathname + anchor.search + anchor.hash;
    window.history.pushState(state, title, url);
    render();
  }
});

registerServiceWorker();
