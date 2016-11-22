import fetchMock from 'fetch-mock'

import { apiServer } from '../'
import todos from './todos.json'

fetchMock.get(`${apiServer}/todos`, todos)
// fetchMock.get(`${apiServer}/todos`, { status: 404, body: { message: 'not found'}})
