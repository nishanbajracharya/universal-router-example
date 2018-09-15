const INITIAL_STATE = {
  list: [1, 2, 3, 4, 5],
  data: {
    1: {
      name: 'ABC',
      email: '...',
      createdAt: '2018-02-03T00:00:00.000Z'
    },
    2: {
      name: 'DEF',
      email: '...',
      createdAt: '2018-06-03T00:00:00.000Z'
    },
    3: {
      name: 'GHI',
      email: '...',
      createdAt: '2018-09-03T00:00:00.000Z'
    },
    4: {
      name: 'JKL',
      email: '...',
      createdAt: '2018-01-06T00:00:00.000Z'
    },
    5: {
      name: 'MNO',
      email: '...',
      createdAt: '2018-05-05T00:00:00.000Z'
    }
  }
};

const users = (state = INITIAL_STATE) => state;

export default users;
