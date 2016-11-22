import React from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'
import sinon from 'sinon'

import { ListItem, Button } from 'react-mdl'

import TodoItem from './'
import EditTitle from '../EditTitle'

describe('<TodoItem />', () => {
  const item = {
    id: 1,
    title: 'another one',
    createdDatetime: 'Thu Nov 17 09:47:53 CST 2016',
    updatedDatetime: 'Thu Nov 17 09:47:53 CST 2016',
    completed: false
  }

  it('should render a Todo item given item data', () => {
    const wrapper = shallow(<TodoItem item={item} actions={{}} />)
    expect(wrapper.find(ListItem)).to.have.length(1)
    expect(wrapper.state('showEdit')).to.be.false
    expect(wrapper.find(EditTitle)).to.have.length(1)
  })

  it('should show edit field when button clicked', () => {
    const wrapper = shallow(<TodoItem item={item} actions={{}} />)
    wrapper.find(Button).first().simulate('click')
    expect(wrapper.state('showEdit')).to.be.true
  })

  it('should delete item when button clicked', () => {
    const deleteItem = sinon.spy()
    const actions = { deleteItem }
    const wrapper = shallow(<TodoItem item={item} actions={actions} />)
    wrapper.find(Button).last().simulate('click')
    expect(deleteItem.calledOnce).to.be.true
  })
})
