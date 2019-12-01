import React from "react";
import { render } from 'react-dom'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Users from './components/Users'
import UserList from './components/UserList'
import UsersThunk from './components/UsersThunk'
import ButtonRedux from './components/ButtonRedux'
import С from './constants'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { getUsers } from './reducers'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'

const initialState = {
  users: [],
  loading: false,
  error: null
}

const logger = store => next => action => {
  let result
  console.groupCollapsed("dispatching", action.type)
  console.log('prev state', store.getState())
  console.log('action', action)
  result = next(action)
  console.log('next state', store.getState())
  console.groupEnd()
}

const store = createStore(getUsers, initialState, applyMiddleware(logger,thunk))

// store.dispatch({
//   type:'GET_USERS',
//   count: 10
// })

// const getUserThunk = count => dispatch => {
//     fetch('https://api.randomuser.me/?nat=US&results=' +count)
//     .then(res => res.json())
//     .then(users => dispatch(
//       { type: "GET_USERS_TWO", users: users.results }
//     ))
//   }

//store.dispatch(getUserThunk(5))
// store.dispatch({
//   type: "GET_USERS_TWO",
//   count: 10
// })

export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/users">
            <ButtonRedux />
            <UsersThunk />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

// function Users() {
//   return <h2>Users</h2>;
// }

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)




