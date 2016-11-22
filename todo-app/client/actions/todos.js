import { createAction } from 'redux-actions'

import api from '../api/todos'
import { showError } from './errors'

export const LOAD_TODOS = 'load all todo items'

const loadSuccess = createAction(LOAD_TODOS, data => data)

export function load() {
  return dispatch => api.load()
    .then((data) => {
      if (data.status === 200) {
        dispatch(loadSuccess(data.data))
      } else {
        dispatch(showError(data.message))
      }
    })
}
