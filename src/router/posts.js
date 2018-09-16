import comments from './comments';

const posts = [
  {
    path: '',
    load: () => import(/* webpackChunkName: 'posts' */ '../views/posts')
  },
  {
    path: '/:id',
    children: [
      {
        path: '',
        load: () =>
          import(/* webpackChunkName: 'postDetail' */ '../views/postDetail')
      },
      ...comments
    ]
  },
  {
    path: '(.*)',
    load: () => import(/* webpackChunkName: 'notFound' */ '../views/notFound')
  }
];

export default posts;
