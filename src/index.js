import React from "react";
import { render } from 'react-dom'
import { BrowserRouter as Router, Switch,Route,Link } from "react-router-dom";
import thunk from 'redux-thunk'
import { UsersContainer, ButtonContainer } from './components/index'
//import С from './constants'
import { createStore, applyMiddleware } from 'redux'
import { getUsers } from './reducers'
import { Provider } from 'react-redux'
import initilalStore from './store/index'

const logger = store => next => action => {
  console.groupCollapsed("dispatching", action.type)
  console.log('prev state', store.getState())
  console.log('action', action)
  next(action)
  console.log('next state', store.getState())
  console.groupEnd()
}

const store = createStore(getUsers, initilalStore, applyMiddleware(thunk, logger))

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

        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/users">
            <h2>Users</h2>
            <ButtonContainer />
            <UsersContainer />
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

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)