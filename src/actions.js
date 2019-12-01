export const getUserThunk = count => dispatch => {
    fetch('https://api.randomuser.me/?nat=US&results=' +count)
    .then(res => res.json())
    .then(users => dispatch(
      { type: "GET_USERS_TWO", users: users.results }
    ))
  }