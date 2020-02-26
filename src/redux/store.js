import { combineReducers, createStore } from 'redux'

var verifyLogged = (state = null, action) => {
  switch(action.type) {
    case 'verifyLogged':
      return action.user
    default:
      return state
  }
}

var reducer = combineReducers({
  user: verifyLogged
})
const store = createStore(reducer)
export default store;

