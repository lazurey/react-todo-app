import { createAction } from 'redux-actions'

import api from '../api/todos'
import { showError } from './errors'

export const LOAD_TODOS = 'load all todo items'
export const ADD_TODO = 'add a new todo item'

const loadSuccess = createAction(LOAD_TODOS, data => data)
const addSuccess = createAction(ADD_TODO, item => item)

export function load() {
  return dispatch => api.load()
    .then((data) => {
      if (data.status >= 200 && data.status < 300) {
        dispatch(loadSuccess(data.data))
      } else {
        dispatch(showError(data.message))
      }
    })
}

export function addTodo(title) {
  return dispatch => api.post(title)
    .then((data) => {
      if (data.status >= 200 && data.status < 300) {
        dispatch(addSuccess(data.data))
      } else {
        dispatch(showError(data.message))
      }
    })
}
