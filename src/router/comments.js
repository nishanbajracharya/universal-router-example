const comments = [
  {
    path: '/comments',
    children: [
      {
        path: '',
        load: () => import(/* webpackChunkName: 'posts' */ '../views/postDetail')
      },
      {
        path: '/:commentId',
        load: () => import(/* webpackChunkName: 'posts' */ '../views/postDetail')
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