import C from '../constants'

const beforeGetUsers = store => next => action => {
    if (typeof action === 'function') {
      store.dispatch({
          type: C.GET_USERS,
          users: [],
          loading: true
      })
    }
    next(action);
}

export default beforeGetUsers