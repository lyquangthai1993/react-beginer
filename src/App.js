import React from 'react'
import './App.sass'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Menu from './components/Menu/Menu'
import LoginPage from './components/LoginPage/LoginPage'
import RegisterPage from './components/RegisterPage/RegisterPage'
import ProfilePage from './components/ProfilePage/ProfilePage'

import {Provider} from 'react-redux'
import store from './redux/store'

const App = () => (
  <div className="App">
    <Provider store={store}>
      <Router>
        <Menu />
        <div className="body">
          <Switch>
            <Route exact path="/">
              HOME
            </Route>
            <Route exact path="/post">
              POST
            </Route>
            <Route path="/profile">
              <ProfilePage />
            </Route>
            <Route path="/contact">
              CONTACT
            </Route>
            <Route path="/register">
              <RegisterPage/>
            </Route>
            <Route path="/login">
              <LoginPage/>
            </Route>
          </Switch>
        </div>
      </Router>
    </Provider>
  </div>
)

export default App;
