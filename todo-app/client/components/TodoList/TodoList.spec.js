import React from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'

import TodoList from './'
import TodoItem from '../TodoItem'

describe('<TodoList />', () => {
  const todoList = [{}, {}]
  it('should render a list of todo items based on the array length', () => {
    const wrapper = shallow(<TodoList todoList={todoList} />)
    expect(wrapper.find(TodoItem)).to.have.length(2)
  })
})
