import { createAction } from 'redux-actions'

import api from '../api/todo'
import { showError } from './errors'

export const UPDATE_TODO = 'update existing todo item title'
export const DELETE_TODO = 'delete item by id'

const updateSuccess = createAction(UPDATE_TODO, data => data)
const deleteSuccess = createAction(DELETE_TODO, id => id)

export function updateTitle(id, title) {
  return dispatch => api.patch(id, title)
    .then((data) => {
      if (data.status === 200) {
        dispatch(updateSuccess(data.data))
      } else {
        dispatch(showError(data.message))
      }
    })
}

export function deleteItem(id) {
  return dispatch => api.delete(id)
    .then((data) => {
      if (data.status === 200) {
        dispatch(deleteSuccess(id))
      } else {
        dispatch(showError(data.message))
      }
    })
}
