import fetchMock from 'fetch-mock'

import { apiServer } from '../'
import todos from './todos.json'
import item from './item-200.json'
import msg400 from './item-400.json'
import msg404 from './item-404.json'
import delete200 from './delete-200.json'

// /todos get, post
fetchMock.get(`${apiServer}/todos`, todos)
fetchMock.post(`${apiServer}/todos`, { status: 201, body: item })
fetchMock.post(`${apiServer}/todos`, { status: 400, body: msg400 })

// /todos/${id}, patch, delete
fetchMock.patch(`${apiServer}/todos/[0-9]`, item)
fetchMock.patch(`${apiServer}/todos/[0-9]{2}`, { status: 400, body: msg400 })
fetchMock.patch(`${apiServer}/todos/[0-9]{2}`, { status: 404, body: msg404 })

fetchMock.delete(`${apiServer}/todos/[0-9]`, delete200)
fetchMock.delete(`${apiServer}/todos/[0-9]`, { status: 404, body: msg404 })
