import React from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'
import sinon from 'sinon'

import { Snackbar } from 'react-mdl'

import ErrorMessage from './'

describe('<ErrorMessage />', () => {
  const showError = {
    show: true,
    message: 'Show error please'
  }

  const hideError = {
    show: false,
    message: ''
  }

  it('should display an error message', () => {
    const wrapper = shallow(<ErrorMessage
      show={showError.show}
      message={showError.message}
      hideError={() => true}
    />)
    expect(wrapper.find(Snackbar)).to.have.length(1)
    expect(wrapper.prop('active')).to.be.true
    expect(wrapper.childAt(0).text()).to.equal(showError.message)
  })

  it('should hide error message when there is no error', () => {
    const wrapper = shallow(<ErrorMessage
      show={hideError.show}
      message={hideError.message}
      hideError={() => true}
    />)
    expect(wrapper.prop('active')).to.be.false
  })

  it('should call hideError handle on click', () => {
    const onHide = sinon.spy()
    const wrapper = shallow(<ErrorMessage
      show={showError.show}
      message={showError.message}
      hideError={onHide}
    />)
    wrapper.setProps('hideError', onHide)
    wrapper.find(Snackbar).shallow().find('button').simulate('click')
    expect(onHide.calledOnce).to.equal(true)
  })
})
