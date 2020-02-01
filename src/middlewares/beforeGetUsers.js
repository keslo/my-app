const beforeGetUsers = store => next => action => {
    if (typeof action === 'function') {
      store.dispatch({
          type: 'GET_USERS',
          users: [],
          loading: true
      })
    }
    next(action);
}

export default beforeGetUsers