import C from './constants'

export const loadUsers = count => dispatch => {
    setTimeout(function() {
      fetch('https://api.randomuser.me/?nat=US&results=' +count)
      .then(res => res.json())
      .then(users => dispatch({
        type: C.GET_USERS,
        users: users.results,
        loading: false
      }))
    }, 1000)
  }