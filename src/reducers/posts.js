const INITIAL_STATE = {
  list: [1, 2, 3, 4, 5],
  data: {
    1: {
      title: 'ABC',
      desc: '...',
      createdAt: '2018-02-03T00:00:00.000Z'
    },
    2: {
      title: 'DEF',
      desc: '...',
      createdAt: '2018-06-03T00:00:00.000Z'
    },
    3: {
      title: 'GHI',
      desc: '...',
      createdAt: '2018-09-03T00:00:00.000Z'
    },
    4: {
      title: 'JKL',
      desc: '...',
      createdAt: '2018-01-06T00:00:00.000Z'
    },
    5: {
      title: 'MNO',
      desc: '...',
      createdAt: '2018-05-05T00:00:00.000Z'
    },
  }
};

const posts = (state = INITIAL_STATE) => state;

export default posts;