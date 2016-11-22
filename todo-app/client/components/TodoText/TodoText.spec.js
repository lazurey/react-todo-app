import React from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'
import sinon from 'sinon'

import { Textfield } from 'react-mdl'

import TodoText from './'

describe('<TodoText />', () => {
  it('should render a textfile by default', () => {
    const wrapper = shallow(<TodoText submit={() => {}} />)
    expect(wrapper.find(Textfield)).to.have.length(1)
  })

  it('should not submit if the title is shorter than 5', () => {
    const submit = sinon.spy()
    const wrapper = shallow(<TodoText submit={submit} />)
    wrapper.setState({ value: '1234' })
    wrapper.find(Textfield).shallow().find('input').simulate('keypress', { charCode: 13 })
    expect(submit.calledOnce).to.be.false
  })

  it('should submit the todo item when title is longer than 5 and clear value', () => {
    const submit = sinon.spy()
    const wrapper = shallow(<TodoText submit={submit} />)
    wrapper.setState({ value: '12345' })
    wrapper.find(Textfield).shallow().find('input').simulate('keypress', { charCode: 13 })
    expect(submit.calledOnce).to.be.true
    expect(wrapper.state('value')).to.equal('')
  })
})
