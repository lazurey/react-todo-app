import { createAction } from 'redux-actions'

export const EDIT_STATUS = 'edit title status'

export const setEdit = createAction(EDIT_STATUS, flag => flag)
