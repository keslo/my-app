import { GET_USERS } from './constants'
import { Action } from 'redux'
import { ThunkAction } from 'redux-thunk'

export const loadUsers = (count: number):ThunkAction<void, null, null, Action<string>> => async dispatch => {
    setTimeout(function() {
      fetch('https://api.randomuser.me/?nat=US&results=' +count)
      .then(res => res.json())
      .then(users => dispatch({
        type: GET_USERS,
        users: users.results,
        loading: false
      }))
    }, 1000)
  }