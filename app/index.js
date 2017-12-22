import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import App from './containers/App'
import { createStore } from 'redux'
import RootReducer from './reducers/RootReducer'

const store = createStore(RootReducer)
let items = document.getElementById('root')

render(
  <Provider store={store}>
     <App/>
  </Provider>,
  items
)
