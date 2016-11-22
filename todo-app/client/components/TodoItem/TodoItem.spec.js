import React from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'

import { ListItem } from 'react-mdl'

import TodoItem from './'

describe('<TodoItem />', () => {
  const item = {
    id: 1,
    title: 'another one',
    createdDatetime: 'Thu Nov 17 09:47:53 CST 2016',
    updatedDatetime: 'Thu Nov 17 09:47:53 CST 2016',
    completed: false
  }

  it('should render a Todo item given item data', () => {
    const wrapper = shallow(<TodoItem item={item} />)
    expect(wrapper.find(ListItem)).to.have.length(1)
  })
})
