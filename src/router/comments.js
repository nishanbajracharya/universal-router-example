const comments = [
  {
    path: '/comments',
    children: [
      {
        path: '',
        load: () => import(/* webpackChunkName: 'posts' */ '../views/posts')
      },
      {
        path: '/:commentId',
        load: () => import(/* webpackChunkName: 'posts' */ '../views/posts')
      },
      {
        path: '(.*)',
        load: () => import(/* webpackChunkName: 'notFound' */ '../views/notFound')
      }
    ]
  },
  {
    path: '(.*)',
    load: () => import(/* webpackChunkName: 'notFound' */ '../views/notFound')
  }
];

export default comments;