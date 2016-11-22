import 'isomorphic-fetch'
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { syncHistoryWithStore } from 'react-router-redux'
import { Router, Route, browserHistory } from 'react-router'

import TodoHome from './containers/TodoHome'
import configure from './store'

import '!!style!css!react-mdl/extra/material.css'
import 'react-mdl/extra/material'

if (process.env.NODE_ENV !== 'production') {
  require('./api/mock')
}

const store = configure({})
const history = syncHistoryWithStore(browserHistory, store)

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={TodoHome} />
    </Router>
  </Provider>,
  document.getElementById('root')
)
