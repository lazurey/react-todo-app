import React from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'
import sinon from 'sinon'

import { Textfield } from 'react-mdl'

import EditTitle from './'

describe('<EditTitle />', () => {
  const item = {
    id: 1,
    title: 'another one',
    createdDatetime: 'Thu Nov 17 09:47:53 CST 2016',
    updatedDatetime: 'Thu Nov 17 09:47:53 CST 2016',
    completed: false
  }

  it('should show a textfield with given title', () => {
    const wrapper = shallow(<EditTitle item={item} show update={() => {}} />)
    expect(wrapper.find(Textfield)).to.have.length(1)
  })

  it('should hide', () => {
    const wrapper = shallow(<EditTitle item={item} show={false} update={() => {}} />)
    expect(wrapper.find(Textfield)).to.have.length(1)
  })

  it('should update title', () => {
    const updateAction = sinon.spy()
    const wrapper = shallow(<EditTitle item={item} show update={updateAction} />)
    wrapper.setState({ value: 'new title updated' })
    wrapper.find(Textfield).shallow().find('input').simulate('keypress', { charCode: 13 })
    expect(updateAction.calledOnce).to.be.true
  })
})
