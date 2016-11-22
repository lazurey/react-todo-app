import fetchMock from 'fetch-mock'

import { apiServer } from '../'
import todosApi from '../todos'

beforeEach(() => {
  fetchMock.isMocking = false
})

afterEach(() => {
  fetchMock.restore()
})

describe('Todos API', () => {
  const testUrl = `${apiServer}/todos`

  it('should be able to get a Promise', (done) => {
    fetchMock.get(testUrl, 200)
    todosApi.load().then.should.be.a.Function
    done()
  })

  it('should be able to get a todo list', (done) => {
    fetchMock.get(testUrl, [{}])
    todosApi.load()
      .then((response) => {
        response.should.be.Existed
        response.should.be.an.instanceOf(Object)
        done()
      })
  })

  it('should be able to handle illegal json format', (done) => {
    fetchMock.get(testUrl, { body: 'string it is', status: 500 })
    todosApi.load()
      .catch((error) => {
        error.should.be.Existed
        done()
      })
  })

  it('should be able to handle error status', (done) => {
    fetchMock.get(testUrl, { body: { message: 'items not found' }, status: 404 })
    todosApi.load()
      .then((response) => {
        response.should.be.Existed
        response.message.should.be.equal('items not found')
        done()
      })
  })
})
