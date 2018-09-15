import React from 'react';
import UniversalRouter from 'universal-router';

const routes = {
  path: '',
  children: [
    {
      path: '',
      load: () => import(/* webpackChunkName: 'home' */ './views/home')
    },
    {
      path: '/posts',
      children: [
        {
          path: '',
          load: () => import(/* webpackChunkName: 'posts' */ './views/posts')
        },
        {
          path: '/:id',
          load: () => import(/* webpackChunkName: 'posts' */ './views/posts')
        },
        {
          path: '(.*)',
          load: () => import(/* webpackChunkName: 'notFound' */ './views/notFound')
        }
      ]
    },
    {
      path: '(.*)',
      load: () => import(/* webpackChunkName: 'notFound' */ './views/notFound')
    }
  ]
};

export default new UniversalRouter(routes, {
  resolveRoute(context, params) {
    if (typeof context.route.load === 'function') {
      return context.route
        .load()
        .then(Component => <Component.default routeProps={context} />);
    }
    if (typeof context.route.action === 'function') {
      return context.route.action(context, params);
    }
    return undefined;
  }
});
