import fetchMock from 'fetch-mock'

import { apiServer } from '../'
import todoApi from '../todo'

beforeEach(() => {
  fetchMock.isMocking = false
})

afterEach(() => {
  fetchMock.restore()
})

describe('Todo update title', () => {
  const testUrl = `${apiServer}/todos/1`
  const title = 'updated title'

  it('should be able to get a Promise', (done) => {
    fetchMock.patch(testUrl, 200)
    todoApi.patch(1, title).then.should.be.a.Function
    done()
  })

  it('should return updated item when success', (done) => {
    fetchMock.patch(testUrl, {})
    todoApi.patch(1, title)
      .then((response) => {
        response.should.be.Existed
        response.should.be.an.instanceOf(Object)
        done()
      })
  })

  it('should be able to handle error status', (done) => {
    fetchMock.patch(testUrl, { body: { message: 'items not found' }, status: 404 })
    todoApi.patch(1, title)
      .then((response) => {
        response.should.be.Existed
        response.message.should.be.equal('items not found')
        done()
      })
  })
})

describe('Todo: delete item', () => {
  const testUrl = `${apiServer}/todos/1`

  it('should be able to get a Promise', (done) => {
    fetchMock.delete(testUrl, 200)
    todoApi.delete(1).then.should.be.a.Function
    done()
  })

  it('should be able to handle error status', (done) => {
    fetchMock.patch(testUrl, { body: { message: 'items not found' }, status: 404 })
    todoApi.patch(1)
      .then((response) => {
        response.should.be.Existed
        response.message.should.be.equal('items not found')
        done()
      })
  })
})
