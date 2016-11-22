import fetchMock from 'fetch-mock'

import { apiServer } from '../'
import todosApi from '../todos'

beforeEach(() => {
  fetchMock.isMocking = false
})

afterEach(() => {
  fetchMock.restore()
})

describe('Todos API Get', () => {
  const testUrl = `${apiServer}/todos`
  const validTitle = 'this is a valid title'
  const invalidTitle = ''

  it('should be able to get a Promise', (done) => {
    fetchMock.post(testUrl, 200)
    todosApi.post(validTitle).then.should.be.a.Function
    done()
  })

  it('should return item if success', (done) => {
    fetchMock.post(testUrl, { id: 1 })
    todosApi.post(validTitle)
      .then((response) => {
        response.should.be.Existed
        response.should.be.an.instanceOf(Object)
        done()
      })
  })

  it('should be able to handle illegal json format', (done) => {
    fetchMock.post(testUrl, 500)
    todosApi.post(validTitle)
      .catch((error) => {
        error.should.be.Existed
        done()
      })
  })

  it('should be able to handle error status', (done) => {
    fetchMock.post(testUrl, { body: { message: 'items not found' }, status: 404 })
    todosApi.post(invalidTitle)
      .then((response) => {
        response.should.be.Existed
        response.message.should.be.equal('items not found')
        done()
      })
  })
})
